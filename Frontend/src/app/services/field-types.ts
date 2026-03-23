import { Injectable } from '@angular/core';
import { FieldTypeDefination } from '../models/fields';
import { TextField } from '../components/field-types/text-field/text-field';
import { CheckboxField } from '../components/field-types/checkbox-field/checkbox-field';
import { SelectField } from '../components/field-types/select-field/select-field';

const Text_Field_Defination: FieldTypeDefination = {
  type: 'text',
  label: 'Text',
  icon: 'text_fields',
  defaultConfig: {
    label: 'Text Field',
    required: false,
  },
  settingsConfig: [
    { type: 'text', key: 'label', label: 'Label' },
    { type: 'text', key: 'placeholder', label: 'Placeholder' },
    { type: 'checkbox', key: 'required', label: 'Required' },
    {
      type: 'select', key: 'inputType', label: 'Input Type', options: [
        { value: 'text', label: 'Text' },
        { value: 'number', label: 'Number' },
        { value: 'email', label: 'Email' },
        { value: 'tel', label: 'Phone' },
      ],
    }
  ],
  component: TextField
}

const Checkbox_Field_Defination: FieldTypeDefination = {
  type: 'checkbox',
  label: 'Checkbox',
  icon: 'check_box',
  defaultConfig: {
    label: 'Checkbox Field',
    required: false,
  },
  settingsConfig: [
    { type: 'text', key: 'label', label: 'Label' },
    { type: 'checkbox', key: 'required', label: 'Required' },
  ],
  component: CheckboxField
}

const Select_Field_Defination: FieldTypeDefination = {
  type: 'select',
  label: 'Dropdown',
  icon: 'arrow_drop_down_circle',
  component: SelectField,
  defaultConfig: {
    label: 'Select',
    required: false,
    options: [
      {
        value: 'option1', label: 'Option 1'
      },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },

    ],
  },
  settingsConfig: [
    { type: 'text', key: 'label', label: 'Label' },
    { type: 'checkbox', key: 'required', label: 'Required' },
    { type: 'dynamic-option', key: 'options', label: 'Dropdown Options' },
  ],
}


@Injectable({
  providedIn: 'root',
})
export class FieldTypes {
  fieldTypes = new Map<string, FieldTypeDefination>([
    ['text', Text_Field_Defination],
    ['checkbox', Checkbox_Field_Defination],
    ['select', Select_Field_Defination],
  ]);

  getAllFieldTypes(): FieldTypeDefination[] {
    return Array.from(this.fieldTypes.values());
  }

  getFieldType(type: string): FieldTypeDefination | undefined {
    return this.fieldTypes.get(type);
  }
}
