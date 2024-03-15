import { Description } from './../../../node_modules/jackspeak/dist/esm/index.d';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Workout {
  @Field(() => Int)
  id: number;

  @Field(() => Date, { name: 'registeredAt' })
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;
}
