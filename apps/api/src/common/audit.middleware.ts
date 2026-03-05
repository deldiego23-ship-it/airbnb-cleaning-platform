import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AuditMiddleware implements NestMiddleware {
  constructor(private prisma: PrismaService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, body } = req;
    
    // Simple audit logging for mutations
    if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
      res.on('finish', async () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const userId = (req as any).user?.id;
          await this.prisma.auditLog.create({
            data: {
              action: `${method} ${originalUrl}`,
              userId,
              details: body,
            },
          }).catch(err => console.error('Audit log failed', err));
        }
      });
    }
    
    next();
  }
}
