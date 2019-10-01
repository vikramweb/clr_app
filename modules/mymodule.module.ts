import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ColumnToggleSettingsComponent } from './components/column-toggle-settings/column-toggle-settings.component';
import { ClarityModule, ClrFormsModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { GridDataComponent } from './components/grid-data/grid-data.component';
import { GridModalComponent } from './components/grid-modal/grid-modal.component';
import { MyRouteRoutes } from './my-route.routing';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, ClarityModule, HttpClientModule,
    HttpClientXsrfModule, FormsModule, ClrFormsModule,
    ReactiveFormsModule,   CommonModule, MyRouteRoutes,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    GridDataComponent,
    GridModalComponent,
    ColumnToggleSettingsComponent
  ],
  exports: [
    TranslateModule,
    TranslatePipe,
  ]

})
export class Module { }
