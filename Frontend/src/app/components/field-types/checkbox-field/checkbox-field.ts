import { Component, input } from '@angular/core';
import { FormFields } from '../../../models/fields';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-checkbox-field',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './checkbox-field.html',
  styleUrl: './checkbox-field.css',
})
export class CheckboxField {
  field=input.required<FormFields>();

}
