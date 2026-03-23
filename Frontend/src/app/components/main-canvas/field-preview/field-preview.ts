import { NgComponentOutlet } from '@angular/common';
import { Component, input, computed, inject } from '@angular/core';
import { FieldTypes } from '../../../services/field-types';
import { FormFields } from '../../../models/fields';

@Component({
  selector: 'app-field-preview',
  imports: [NgComponentOutlet],
  templateUrl: './field-preview.html',
  styleUrl: './field-preview.css',
})
export class FieldPreview {
  field = input.required<FormFields>();

  fieldTypes = inject(FieldTypes);

  previewComponent = computed(() => {
    const type = this.fieldTypes.getFieldType(this.field().type);
    return type?.component ?? null;;
  });
}
