import { Type } from "@angular/core";

export interface FieldTypeDefination{
    type: string;
    label: string;
    icon: string;
    defaultConfig: any;
    settingsConfig: FieldSettingsDefination[];
    component: Type<unknown>;
}

export interface FieldSettingsDefination{
    type: 'text' | 'checkbox' | 'select' | 'dynamic-option' ;
    key: string;
    label: string;
    options?: OptionItem[];
}

export interface OptionItem{
    label: string;
    value:string;
}


export interface FormFields{
    id: string;
    type: string;
    label: string;
    required: boolean;
    inputType?: string;
    placeholder?: string;
    options?: OptionItem[];
}