import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userID:string;
  password:string;
  message:string;
  constructor(private router: Router,private foodService:FoodserviceService) { }

  ngOnInit(): void {
    this.foodService.removeCartItems();
  }

  login(){
    if(this.userID=="abc" && this.password=="abc"){
      this.router.navigate(['../menu']);
    }
    else{
      this.message="Oops!Invalid Credentials"
    }
  }

}
