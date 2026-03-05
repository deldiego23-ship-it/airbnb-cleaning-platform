import { WebSocketGateway, WebSocketServer, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: true })
export class OrdersGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('chat.message')
  handleMessage(@MessageBody() data: any) {
    this.server.to(`order_${data.orderId}`).emit('chat.message', data);
  }

  notifyStatusChange(orderId: string, status: string) {
    this.server.emit('order.statusChanged', { orderId, status });
  }
}
