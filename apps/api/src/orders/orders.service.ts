import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { OrderStatus, TaskType } from '@prisma/client';
import { getDistance } from '../common/utils';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async validateScan(bagId: string, orderToken: string, lat: number, lng: number) {
    const order = await this.prisma.order.findUnique({
      where: { token: orderToken },
      include: { property: true, bag: true },
    });

    if (!order) throw new BadRequestException('Invalid order token');
    if (order.bag?.qrCode !== bagId) throw new BadRequestException('Incorrect bag');

    const distance = getDistance(lat, lng, order.property.lat, order.property.lng);
    if (distance > 100) {
      await this.prisma.auditLog.create({
        data: { action: 'SCAN_FAILED_GEOFENCE', details: { distance, orderId: order.id } },
      });
      throw new BadRequestException('Geofence violation: too far from property');
    }

    return order;
  }

  async deliverBag(orderId: string, deliveryType: string, lat: number, lng: number) {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
      include: { property: true },
    });

    if (deliveryType === 'INSIDE' && (!order.property.insideInstructions || !order.property.accessCode)) {
      throw new BadRequestException('Inside delivery not allowed: no instructions/code');
    }

    return this.prisma.order.update({
      where: { id: orderId },
      data: { status: OrderStatus.BAG_DELIVERED },
    });
  }

  async getClusters(lat: number, lng: number) {
    const properties = await this.prisma.property.findMany({
      include: { orders: { where: { status: OrderStatus.PENDING } } },
    });

    return properties.filter(p => getDistance(lat, lng, p.lat, p.lng) < 200);
  }
}
