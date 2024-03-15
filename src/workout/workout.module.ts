import { Module } from '@nestjs/common';
import { WorkoutService } from './workout.service';
import { WorkoutResolver } from './workout.resolver';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [WorkoutResolver, WorkoutService, PrismaService],
  imports: [],
})
export class WorkoutModule {}
