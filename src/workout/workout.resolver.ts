import { Resolver } from '@nestjs/graphql';
import { WorkoutService } from './workout.service';

@Resolver('Workout')
export class WorkoutResolver {
  constructor(private readonly workoutService: WorkoutService) {}
}
