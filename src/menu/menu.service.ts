// src/menu/menu.service.ts
import { Injectable } from '@nestjs/common';
import { CreateMenuItemDto } from './create-menu-item.dto';

@Injectable()
export class MenuService {
  private menuItems = [];

  create(createMenuItemDto: CreateMenuItemDto) {
    const newItem = { id: Date.now(), ...createMenuItemDto };
    this.menuItems.push(newItem);
    return newItem;
  }

  findAll() {
    return this.menuItems;
  }

  findOne(id: number) {
    return this.menuItems.find(item => item.id === id);
  }

  remove(id: number) {
    this.menuItems = this.menuItems.filter(item => item.id !== id);
    return { deleted: true };
  }
}
