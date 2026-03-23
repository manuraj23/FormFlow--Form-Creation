import { Component, signal, inject } from '@angular/core';
import { FormElementsMenu } from './components/form-elements-menu/form-elements-menu';
import { MainCanvas } from './components/main-canvas/main-canvas';
import { FieldSetting } from './components/field-setting/field-setting';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Form } from './services/form';

@Component({
  selector: 'app-root',
  imports: [FormElementsMenu,MainCanvas,FieldSetting,DragDropModule, MatIconModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Frontend');
  formService=inject(Form);
}
