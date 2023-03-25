import { Component } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router } from '@angular/router';
import { ScategoriesService } from 'src/app/services/scategories.service';
import { Scategories } from 'src/app/models/scategories';

@Component({
  selector: 'app-insert-articles',
  templateUrl: './insert-articles.component.html',
  styleUrls: ['./insert-articles.component.css']
})
export class InsertArticlesComponent {
  article:Articles= new Articles()
  scategorie:Scategories[]
  constructor(private artserv:ArticlesService ,private router:Router,private scatserv:ScategoriesService){
   

  }
  ngOnInit() {
    this.loadscategorie()
  }
  loadscategorie(){
    return this.scatserv.GetScategorie().subscribe(data=>this.scategorie=data),
      (error:any)=>console.log(error)



  }
  ajoutproduit=()=>{
    console.log("article "+this.article)
    this.artserv.AddArticles(this.article).subscribe(art=>this.router.navigate(["Larticles"]))
  }
  

}
