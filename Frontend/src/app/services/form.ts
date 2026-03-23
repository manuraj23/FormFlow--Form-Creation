import { Injectable, signal, computed } from '@angular/core';
import { FormRow } from '../models/form';
import { FormFields } from '../models/fields';

@Injectable({
  providedIn: 'root',
})
export class Form {
  private _rows = signal<FormRow[]>([]);
  private _selectedFieldId = signal<string | null>(null);
  public readonly rows = this._rows.asReadonly();

  public readonly selectedField = computed(() => this._rows().flatMap(r => r.fields).find(f => f.id === this._selectedFieldId()));

  constructor() {
    this._rows.set([
      {
        id: crypto.randomUUID(),
        fields: []
      }
    ])
  }

  addField(field: FormFields, rowId: string, index?: number) {
    const rows = this._rows();
    const newRows = rows.map(row => {
      if (row.id === rowId) {
        const updatedFields = [...row.fields];
        if (index !== undefined) {
          updatedFields.splice(index, 0, field);
        } else {
          updatedFields.push(field);
        }
        return { ...row, fields: updatedFields };
      }
      return row;
    })
    this._rows.set(newRows);
  }

  deleteField(fieldId: string) {
    const rows = this._rows();
    const newRows = rows.map(row => ({
      ...row,
      fields: row.fields.filter(f => f.id !== fieldId)
    }))
    this._rows.set(newRows);
  }

  addRow() {
    const newRow: FormRow = {
      id: crypto.randomUUID(),
      fields: []
    };
    const rows = this._rows();
    this._rows.set([...rows, newRow]);
  }

  deleteRow(rowId: string) {
    if (this._rows().length === 1) return;
    const rows = this._rows();
    const newRows = rows.filter(row => row.id !== rowId);
    this._rows.set(newRows);
  }

  moveField(fieldId: string, sourceRowId: string, targetRowId: string, targetIndex: number = -1) {
    const rows = this._rows();
    let fieldToMove: FormFields | undefined;
    let sourceRowIndex = -1;
    let sourceFielIndex = -1;

    rows.forEach((row, rowIndex) => {
      if (row.id === sourceRowId) {
        sourceRowIndex = rowIndex;
        sourceFielIndex = row.fields.findIndex(f => f.id === fieldId);
        if (sourceFielIndex >= 0) {
          fieldToMove = row.fields[sourceFielIndex];
        }
      }
    });

    if (!fieldToMove) return;

    const newRows = [...rows];
    const fieldsWithRemovedField = newRows[sourceRowIndex].fields.filter(f => f.id !== fieldId);
    newRows[sourceRowIndex].fields = fieldsWithRemovedField;

    const targetRowIndex = newRows.findIndex(r => r.id === targetRowId);
    if (targetIndex >= 0) {
      const targetFields = [...newRows[targetRowIndex].fields];
      targetFields.splice(targetIndex, 0, fieldToMove);
      newRows[targetRowIndex].fields = targetFields;
    } else {
      newRows[targetRowIndex].fields.push(fieldToMove);
    }

    this._rows.set(newRows);
  }

  setSelectedField(fieldId: string) {
    this._selectedFieldId.set(fieldId);
  }

  updateField(fieldId: string, data: Partial<FormFields>) {
    const rows = this._rows();
    const newRows = rows.map(row => ({
      ...row,
      fields: row.fields.map(f => f.id === fieldId ? { ...f, ...data } : f)
    }))
    this._rows.set(newRows);
  }

  moveRowUp(rowId: string) {
    const rows = this._rows();
    const index = rows.findIndex((r) => r.id === rowId);
    if (index > 0) {
      const newRows = [...rows];
      const temp = newRows[index - 1];
      newRows[index - 1] = newRows[index];
      newRows[index] = temp;
      this._rows.set(newRows);
    }
  }

  moveRowDown(rowId: string) {
    const rows = this._rows();
    const index = rows.findIndex((r) => r.id === rowId);
    if (index < rows.length - 1) {
      const newRows = [...rows];
      const temp = newRows[index + 1];
      newRows[index + 1] = newRows[index];
      newRows[index] = temp;
      this._rows.set(newRows);
    }
  }

  //Save 
  saveForm() {
    const formData = this._rows();
    localStorage.setItem('savedForm', JSON.stringify(formData));
    console.log('Form saved');
  }
  loadForm() {
    const data = localStorage.getItem('savedForm');
    if (data) {
      this._rows.set(JSON.parse(data));
      console.log('Form loaded');
    }
  }


}

