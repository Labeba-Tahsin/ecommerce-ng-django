import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { commonImports } from '../../shared/common.imports';

export interface Category {
  id: number;
  name: string;
  parentId?: number | null;
}

@Component({
  selector: 'app-category',
  imports: [commonImports],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss',
  providers: [ConfirmationService, MessageService],
})
export class CategoryComponent {
  categories: Category[] = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Books' },
    { id: 3, name: 'Clothing' },
  ];

  displayDialog = false;
  isEdit = false;
  categoryName = '';
  selectedCategoryId: number | null = null;
  parentCategoryId: number | null = null;

  constructor(
    private confirm: ConfirmationService,
    private message: MessageService
  ) {}

  openAddDialog() {
    this.isEdit = false;
    this.categoryName = '';
    this.parentCategoryId = null;
    this.displayDialog = true;
  }

  openEditDialog(category: any) {
    this.isEdit = true;
    this.categoryName = category.name;
    this.selectedCategoryId = category.id;
    this.parentCategoryId = category.parentId || null;
    this.displayDialog = true;
  }

  saveCategory() {
    if (this.isEdit) {
      const index = this.categories.findIndex(
        (c) => c.id === this.selectedCategoryId
      );
      this.categories[index].name = this.categoryName;
      this.categories[index].parentId = this.parentCategoryId;
      this.message.add({
        severity: 'success',
        summary: 'Updated successfully',
      });
    } else {
      const newId = Math.max(...this.categories.map((c) => c.id), 0) + 1;
      this.categories.push({
        id: newId,
        name: this.categoryName,
        parentId: this.parentCategoryId || null,
      });
      this.message.add({ severity: 'success', summary: 'Added successfully' });
    }
    this.displayDialog = false;
  }

  deleteCategory(id: number) {
    this.confirm.confirm({
      message: 'Are you sure you want to delete this category?',
      header: 'Confirm Deletion',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger', // Yes = red
      rejectButtonStyleClass: 'p-button-secondary', // No = gray
      accept: () => {
        this.categories = this.categories.filter((c) => c.id !== id);
        this.message.add({ severity: 'info', summary: 'Deleted successfully' });
      },
    });
  }

  getParentName(parentId: number | null): string {
    if (!parentId) return 'None';
    const parent = this.categories.find((c) => c.id === parentId);
    return parent ? parent.name : 'None';
  }
}
