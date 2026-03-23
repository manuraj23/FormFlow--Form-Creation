import { Component , input, signal} from '@angular/core';
import { FieldTypeDefination } from '../../../models/fields';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-field-button',
  imports: [MatIconModule,DragDropModule],
  templateUrl: './field-button.html',
  styleUrl: './field-button.css',
})
export class FieldButton {
  field=input.required<FieldTypeDefination>();
  whileDragging=signal(false);
}
