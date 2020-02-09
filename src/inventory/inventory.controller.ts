import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto, UpdateInventoryDto } from './dto';

@Controller('inventories')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  createInventory(@Body() createInventoryDto: CreateInventoryDto): string {
    console.log(createInventoryDto);
    return this.inventoryService.createInventory();
  }

  @Get()
  getInventories(): string {
    return this.inventoryService.getInventories();
  }

  @Put()
  updateInventory(@Body() updateInventoryDto: UpdateInventoryDto): string {
    console.log(updateInventoryDto);
    return this.inventoryService.createInventory();
  }

  @Delete(':id')
  deleteInventory(@Param() id: string): string {
    return this.inventoryService.createInventory();
  }
}
