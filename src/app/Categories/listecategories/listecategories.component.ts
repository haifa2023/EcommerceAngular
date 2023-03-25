import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service'; 
import { Categories } from 'src/app/models/categories';

@Component({
  selector: 'app-listecategories',
  templateUrl: './listecategories.component.html',
  styleUrls: ['./listecategories.component.css']
})
export class ListecategoriesComponent {
categories:Categories[]
constructor(private catserv:CategoriesService){}
ngOnInit() {
  return this.catserv.ListCategories().subscribe(data =>{
    console.log("vvvv "+data)

    return this.categories = data}),

    (err:any)=>console.log(err)
  
}
suppcategories(id:Object){
  console.log("edeeeeee")
  return this.catserv.Deletecategories(id).subscribe(data=>{return this.catserv.ListCategories().subscribe(data =>{
    console.log("vvvv "+data)

    return this.categories = data}),

    (err:any)=>console.log(err)});
  }


}
