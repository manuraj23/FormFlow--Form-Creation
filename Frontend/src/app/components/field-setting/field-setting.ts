import { Component ,inject, computed} from '@angular/core';
import { Form } from '../../services/form';
import { FieldTypes } from '../../services/field-types';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckbox } from '@angular/material/checkbox';
import { DynamicOptions } from './dynamic-options/dynamic-options';

@Component({
  selector: 'app-field-setting',
  imports: [MatFormFieldModule, MatInput, FormsModule, MatSelectModule, MatCheckbox, DynamicOptions],
  templateUrl: './field-setting.html',
  styleUrl: './field-setting.css',
})
export class FieldSetting {
  form = inject(Form);
  fieldTypes=inject(FieldTypes)
  fieldSettings=computed(()=>{
    const field= this.form.selectedField();
    if(!field) return [];
    const fieldDef=this.fieldTypes.getFieldType(field.type);
    return fieldDef?.settingsConfig || [];
  })


  fieldValue = computed(()=>{
    const field= this.form.selectedField();
    if(!field) return {};
    return field as any;
  });
  
  updateField(fieldId:string, key: string, value: any){
    this.form.updateField(fieldId,{[key]:value});
  }



}
