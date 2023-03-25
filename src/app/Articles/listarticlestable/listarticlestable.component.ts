import { Component } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { Articles } from 'src/app/models/articles';


@Component({
  selector: 'app-listarticlestable',
  templateUrl: './listarticlestable.component.html',
  styleUrls: ['./listarticlestable.component.css']
})
export class ListarticlestableComponent {
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

}
