import { Component, inject } from '@angular/core';
import { FieldTypes } from '../../services/field-types';
import { FieldButton } from './field-button/field-button';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-form-elements-menu',
  imports: [FieldButton, DragDropModule],
  templateUrl: './form-elements-menu.html',
  styleUrl: './form-elements-menu.css',
})
export class FormElementsMenu {
  
  fieldTypeService=inject(FieldTypes);  //--fieldTypeService
  fieldTypes=this.fieldTypeService.getAllFieldTypes();

  noDropAllowed(item: CdkDrag<any>){
    return false;
  }
}

