import { Component } from '@angular/core';
import { ScategoriesService } from 'src/app/services/scategories.service';
import { Scategories } from 'src/app/models/scategories';


@Component({
  selector: 'app-list-scategories',
  templateUrl: './list-scategories.component.html',
  styleUrls: ['./list-scategories.component.css']
})
export class ListScategoriesComponent {
  scategories:Scategories[]
  constructor(private scatserv:ScategoriesService){}
ngOnInit() {
  return this.scatserv.ListScategories().subscribe(data =>
    this.scategories = data),
    (err:any)=>console.log(err)

}

}
