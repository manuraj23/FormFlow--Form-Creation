import { Component, signal, inject } from '@angular/core';
import { FormEditor } from "./form-editor/form-editor";
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormPreview } from './form-preview/form-preview';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon } from "@angular/material/icon";
import { Form } from '../../services/form';

@Component({
  selector: 'app-main-canvas',
  standalone: true,
  imports: [FormEditor, FormPreview, MatButtonToggleModule, MatButtonModule, MatIcon],
  templateUrl: './main-canvas.html',
  styleUrl: './main-canvas.css',
})
export class MainCanvas {
 activeTab=signal<'preview'|'editor'>('editor');
 formService=inject(Form)
}
