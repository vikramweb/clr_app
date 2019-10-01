import { Component, QueryList, ViewChildren, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClrDatagridColumn,ClrDatagridColumnToggle, ClrDatagridFilterInterface, ClrDatagridStateInterface } from '@clr/angular';
import { Subject } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  //title = 'robust-proj';
}
