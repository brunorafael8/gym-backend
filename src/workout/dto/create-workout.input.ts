import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWorkoutInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;
}
