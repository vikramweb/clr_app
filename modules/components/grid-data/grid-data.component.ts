import { Component, OnInit } from '@angular/core';
import { QueryList, ViewChildren, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClrDatagridColumn,ClrDatagridColumnToggle, ClrDatagridFilterInterface, ClrDatagridStateInterface } from '@clr/angular';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ColumnToggleSettingsModel } from '../column-toggle-settings/column-toggle-settings-model';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.sass']
})
export class GridDataComponent implements OnInit {
 
  @ViewChildren(ClrDatagridColumn) columns: QueryList<ClrDatagridColumn>;
  rows = [];
  columnToggleSettingsModel = new ColumnToggleSettingsModel();
  @ViewChild(ClrDatagridColumnToggle, { static: false }) columnToggle;

  constructor() {
    
  }
  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.rows.push({ a: 'data' });
    }

    this.columnToggleSettingsModel.setDefaultTemplate({
      name: 'Default',
      selectedColumns: ['col1', 'col2', 'col3'],
      gridId: null
    });

    this.columnToggleSettingsModel.setColumnTemplates([{
      name: 'Template 1',
      selectedColumns: ['col1', 'col5', 'col6'],
      gridId: null
    }, {
      name: 'Template 2',
      selectedColumns: ['col2', 'col4', 'col6'],
      gridId: null
    }]);
  }

   ngAfterViewInit() {
        setTimeout(
            () => {
                // values: https://github.com/vmware/clarity/blob/master/src/clr-angular/popover/common/popover.ts
                this.columnToggle.popoverPoint = 5; // top left
                this.columnToggle.anchorPoint = 11; // bottom left
            }
        );
    }

  onSubmit() {
  }

  isColumnHidden(name: string) {
    return this.columnToggleSettingsModel.selectedTemplate.selectedColumns.every(r => r != name);
  }

  deleteTemplate() {
    let templates = this.columnToggleSettingsModel.getColumnTemplates();
    const indexOfItem = templates.findIndex(r => r.name === this.columnToggleSettingsModel.selectedTemplate.name);
    templates.splice(indexOfItem, 1);
    this.columnToggleSettingsModel.setColumnTemplates(templates);
  }

  saveTemplate() {
    let templates = this.columnToggleSettingsModel.getColumnTemplates();
    let templateToCreate = {
      gridId: null,
      name: this.columnToggleSettingsModel.newTemplateName,
      selectedColumns: this.columns.filter(column => !this.isColumnHidden).map(r => r.field)
    };
    templates.push(templateToCreate);

    this.columnToggleSettingsModel.setColumnTemplates(templates);
    this.columnToggleSettingsModel.saveNewTemplate = false;
    this.columnToggleSettingsModel.newTemplateName = '';
    this.columnToggleSettingsModel.selectedTemplate = templateToCreate;
  }

}
