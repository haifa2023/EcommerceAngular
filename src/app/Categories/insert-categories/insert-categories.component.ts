import { Component } from '@angular/core';
import { Categories } from 'src/app/models/categories';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-categories',
  templateUrl: './insert-categories.component.html',
  styleUrls: ['./insert-categories.component.css']
})
export class InsertCategoriesComponent {
  categorie:Categories=new Categories() // initialisation de l'article dans le constructeur
  constructor(private catserv:CategoriesService ,private router:Router){
     

  }
  ajoutcategories=()=>{
    console.log("categorie "+this.categorie)
    this.catserv.AddCategories(this.categorie).subscribe(cat=>this.router.navigate(["Lcategories"]))
  }

}
