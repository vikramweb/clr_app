import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ColumnToggleSettingsModel } from './column-toggle-settings-model';

@Component({
  selector: 'app-column-toggle-settings',
  templateUrl: './column-toggle-settings.component.html',
  styleUrls: ['./column-toggle-settings.component.css']
})
export class ColumnToggleSettingsComponent implements OnInit {

  @Input() model: ColumnToggleSettingsModel;
  @Output() modelChange: EventEmitter<ColumnToggleSettingsModel> = new EventEmitter();
  @Output() saveTemplate: EventEmitter<any> = new EventEmitter();
  @Output() deleteTemplate: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isUpdateVisible(): boolean {
    return this.model.saveNewTemplate || this.model.selectedTemplate.name !== this.model.getDefaultTemplate().name;
  }

  isSaveDisabled() {
    return this.model.saveNewTemplate && !this.model.newTemplateName;
  }

  saveEvent() {
    this.saveTemplate.emit();
  }

  logSelected(){
    console.log(this.model.selectedTemplate.selectedColumns);
  }

}
