import { Injectable } from '@nestjs/common';

@Injectable()
export class InventoryService {
    createInventory(): string {
        return 'Inventory Created!!';
    }

    getInventories(): string {
        return 'Get Inventory';
    }
}