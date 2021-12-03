import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// import { JsonTreeComponent } from './json-tree/json-tree.component';
// import { JsonTreeComponent } from './json-tree/json-tree.component';
import { JsonTreeBapModule } from 'ng-json-tree-view';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, JsonTreeBapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
