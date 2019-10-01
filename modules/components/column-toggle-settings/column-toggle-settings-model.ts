export class ColumnToggleSettingsModel {
    newTemplateName: string;
    selectedTemplate: VisibleColumnsTemplate;
    saveNewTemplate: boolean;
    private defaultTemplate: VisibleColumnsTemplate;
    private columnTemplates: VisibleColumnsTemplate[];

    getDefaultTemplate(): VisibleColumnsTemplate {
        return this.defaultTemplate;
    }

    getColumnTemplates(): VisibleColumnsTemplate[] {
        return this.columnTemplates;
    }

    setColumnTemplates(columnTemplates: VisibleColumnsTemplate[]) {
        this.columnTemplates = columnTemplates;
        if (this.columnTemplates && this.columnTemplates[0]) {
            this.selectedTemplate = columnTemplates[0];
        } else {
            this.selectedTemplate = this.defaultTemplate;
        }
    }

    setDefaultTemplate(defaultTemplate: VisibleColumnsTemplate) {
        this.defaultTemplate = defaultTemplate;
        this.selectedTemplate = this.defaultTemplate;
    }
}

export class VisibleColumnsTemplate {
    name: string;
    gridId: string;
    selectedColumns: string[];
}