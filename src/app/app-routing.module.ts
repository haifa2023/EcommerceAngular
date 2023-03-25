import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertArticlesComponent } from './Articles/insert-articles/insert-articles.component';
import { ListarticlescardComponent } from './Articles/listarticlescard/listarticlescard.component';
import { ListarticlestableComponent } from './Articles/listarticlestable/listarticlestable.component';
import { ListeArticlesComponent } from './Articles/liste-articles/liste-articles.component';
import { ModifArticlesComponent } from './Articles/modif-articles/modif-articles.component';
import { InsertCategoriesComponent } from './Categories/insert-categories/insert-categories.component';
import { ListecategoriesComponent } from './Categories/listecategories/listecategories.component';
import { ListScategoriesComponent } from './Scategories/list-scategories/list-scategories.component';


const routes: Routes = [
  {path:"Larticles",component:ListeArticlesComponent},
  {path:"Lcategories",component:ListecategoriesComponent},
  {path:"Lscategories",component:ListScategoriesComponent},
  {path:"Lartcard",component:ListarticlescardComponent},
  {path:"insertart",component:InsertArticlesComponent},
  {path:"insertcat",component:InsertCategoriesComponent},
  {path:"Listarticlestable",component:ListarticlestableComponent},
  {path:"updatearticles/:_id",component:ModifArticlesComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
