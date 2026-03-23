import { Component, input, inject, computed } from '@angular/core';
import { FormFields } from '../../../models/fields';
import { FieldTypes } from '../../../services/field-types';
import { NgComponentOutlet, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Form } from '../../../services/form';
import { FieldPreview } from '../field-preview/field-preview';

@Component({
  selector: 'app-form-field',
  imports: [ TitleCasePipe, MatButtonModule, MatIconModule, FieldPreview],
  templateUrl: './form-field.html',
  styleUrl: './form-field.css',
})
export class FormField {
  field = input.required<FormFields>();

  form = inject(Form);

  deleteField(e: Event) {
    e.stopPropagation();
    this.form.deleteField(this.field().id);
  }
}
