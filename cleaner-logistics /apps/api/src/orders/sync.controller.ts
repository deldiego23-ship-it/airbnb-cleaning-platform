import { Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { SetMetadata } from '@nestjs/common';
import { Role } from '@prisma/client';

@Controller('sync')
export class SyncController {
  @Post('airbnb')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @SetMetadata('roles', [Role.ADMIN])
  async syncAirbnb() {
    // MVP Placeholder for iCal sync logic
    return {
      message: 'Sync triggered',
      timestamp: new Date().toISOString(),
      status: 'OK',
      details: 'In a real implementation, this would fetch iCal URLs and create/update orders.'
    };
  }
}
