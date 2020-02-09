import { Module } from '@nestjs/common';
import { InventoryModule } from './inventory/inventory.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('Mongohost', { useNewUrlParser: true, useUnifiedTopology: true }),
    InventoryModule
  ],
})
export class AppModule { }
