import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ListecategoriesComponent } from './Categories/listecategories/listecategories.component';
import { InsertCategoriesComponent } from './Categories/insert-categories/insert-categories.component';
import { ModifCategoriesComponent } from './Categories/modif-categories/modif-categories.component';
import { ListeArticlesComponent } from './Articles/liste-articles/liste-articles.component';
import { InsertArticlesComponent } from './Articles/insert-articles/insert-articles.component';
import { ModifArticlesComponent } from './Articles/modif-articles/modif-articles.component';
import { InsertScategoriesComponent } from './Scategories/insert-scategories/insert-scategories.component';
import { ListScategoriesComponent } from './Scategories/list-scategories/list-scategories.component';
import { ModifScategoriesComponent } from './Scategories/modif-scategories/modif-scategories.component';
import { ListarticlescardComponent } from './Articles/listarticlescard/listarticlescard.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { ListarticlestableComponent } from './Articles/listarticlestable/listarticlestable.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListecategoriesComponent,
    InsertCategoriesComponent,
    ModifCategoriesComponent,
    ListeArticlesComponent,
    InsertArticlesComponent,
    ModifArticlesComponent,
    InsertScategoriesComponent,
    ListScategoriesComponent,
    ModifScategoriesComponent,
    ListarticlescardComponent,
    ListarticlestableComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
