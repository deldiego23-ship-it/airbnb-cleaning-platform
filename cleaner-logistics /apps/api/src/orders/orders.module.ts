import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { SyncController } from './sync.controller';
import { OrdersGateway } from './orders.gateway';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [OrdersController, SyncController],
  providers: [OrdersService, OrdersGateway, PrismaService],
})
export class OrdersModule {}
