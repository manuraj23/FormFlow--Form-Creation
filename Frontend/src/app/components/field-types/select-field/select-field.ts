import { Component, input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormField } from '@angular/forms/signals';
import { FormFields } from '../../../models/fields';

@Component({
  selector: 'app-select-field',
  imports: [MatSelectModule, MatFormFieldModule ],
  templateUrl: './select-field.html',
  styleUrl: './select-field.css',
})
export class SelectField {
  field=input.required<FormFields>();
}
