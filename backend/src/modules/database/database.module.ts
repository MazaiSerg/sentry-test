import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { MongooseModule } from '@nestjs/mongoose';
import mongoose from 'mongoose';

mongoose.set('debug', true);

dotenv.config();

const { MONGODB_URL } = process.env;

@Module({
  imports: [MongooseModule.forRoot(MONGODB_URL)],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
