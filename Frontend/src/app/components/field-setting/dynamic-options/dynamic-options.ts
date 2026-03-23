import { Component,input ,output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { OptionItem } from '../../../models/fields';
import {  MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-options',
  imports: [MatButtonModule, MatIconModule, MatFormFieldModule, FormsModule],
  templateUrl: './dynamic-options.html',
  styleUrl: './dynamic-options.css',
})
export class DynamicOptions {
  title=input('');
  options=input.required<OptionItem[]>();
  optionsChange= output<OptionItem[]>();

  addOption(){
    const currentOptions=this.options() || [];
    const newOptions=[...currentOptions];
    newOptions.push({
      label: `Option ${currentOptions.length + 1}`,
      value: `option-${currentOptions.length + 1}`,
    });
    this.optionsChange.emit(newOptions);
  }

  removeOption(index: number){
    const currentOptions=this.options();
    const newOptions=[...currentOptions];
    newOptions.splice(index,1);
    this.optionsChange.emit(newOptions);
  }

  updateOption(index:number, newLabel:string){
    const currentOptions=this.options();
    const newOptions=[...currentOptions];
    newOptions[index]={
      ...newOptions[index],label:newLabel,
    };
    this.optionsChange.emit(newOptions);
  }
   
}
