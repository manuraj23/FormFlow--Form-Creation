import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';
import { Component, inject } from '@angular/core';
import { Form } from '../../../services/form';
import { FieldTypeDefination, FormFields } from '../../../models/fields';
import { FormField } from "../form-field/form-field";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-form-editor',
  standalone: true,
  imports: [DragDropModule, FormField,MatButtonModule, MatIconModule],
  templateUrl: './form-editor.html',
  styleUrl: './form-editor.css',
})
export class FormEditor {

  form=inject(Form);

  onDropInRow(event: CdkDragDrop<string>, rowId: string) {
    console.log("Dropped in form editor", event);

    if(event.previousContainer.data === 'field-selector'){
      const fieldType=event.item.data as FieldTypeDefination;
      const newField:FormFields={
      id: crypto.randomUUID(),
      type: fieldType.type,
      ...fieldType.defaultConfig
    };
      this.form.addField(newField,rowId,event.currentIndex);
      return;
  }
  const dragData=event.item.data as FormFields;
  const previousRowId=event.previousContainer.data as string;
  this.form.moveField(dragData.id,previousRowId,rowId,event.currentIndex);
}
}
