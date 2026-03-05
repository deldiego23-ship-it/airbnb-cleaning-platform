import { Controller, Post, Body, UseGuards, Get, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Post('validate-scan')
  async validateScan(@Body() body: any) {
    return this.ordersService.validateScan(body.bagId, body.orderToken, body.lat, body.lng);
  }

  @Post('deliver')
  async deliver(@Body() body: any) {
    return this.ordersService.deliverBag(body.orderId, body.deliveryType, body.lat, body.lng);
  }

  @Get('clusters')
  async getClusters(@Query('lat') lat: string, @Query('lng') lng: string) {
    return this.ordersService.getClusters(parseFloat(lat), parseFloat(lng));
  }
}
