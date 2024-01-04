import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private userService:UserService) {

    this.userService.geUsers().subscribe((response:any)=>{
      console.log(response);
    })
   }

  ngOnInit(): void {
  }

}
