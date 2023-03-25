import { Component, OnInit } from '@angular/core';
import { Articles } from 'src/app/models/articles';
import { ArticlesService } from 'src/app/services/articles.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-articles',
  templateUrl: './modif-articles.component.html',
  styleUrls: ['./modif-articles.component.css']
})
export class ModifArticlesComponent implements OnInit { //man8ir implements fel version 15
id:any
  article:Articles= new Articles()
  constructor(private artserv:ArticlesService ,private router:Router,private activatedRoute: ActivatedRoute){

    

  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['_id'];
    this.artserv.GetArticle(this.id).subscribe(art=>this.article=art)

  }
  modifarticle=()=>{
    console.log("article "+this.article)
    this.artserv.UpdateArticle(this.id,this.article ).subscribe(art=>this.router.navigate(["Larticles"]))
  } //artserv elli 7atitha fel constructor
  

}

