import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Articles } from 'src/app/models/articles';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css']
})
export class ListeArticlesComponent {
  articles:Articles[]
  constructor (private artser:ArticlesService){}
  ngOnInit() {
    this.Listart()
  }
Listart(){
  return this.artser.ListArticles().subscribe(data=>
    this.articles=data),
    (error:any)=>console.log(error)
    
    
}
supparticle(id:Object){
  return this.artser.Deletearticles(id).subscribe(data=>{this.Listart()});
  } 

  updatearticle(id:Object){
    return this.artser.GetArticle(id).subscribe(data=>{this.Listart()});
    } 
    
}
