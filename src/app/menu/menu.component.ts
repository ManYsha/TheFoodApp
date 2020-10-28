import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodMenu } from '../food-menu.model';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuItems:FoodMenu[];
  public cartItems:FoodMenu[]=[];
  message:string;
    constructor(private router: Router,public foodservice:FoodserviceService) {
   }

  
  ngOnInit(){
    
    this.foodservice.getMenuItems().subscribe(data=>{
      this.menuItems=data;
    })

  }

  public updateQty(menuitem:FoodMenu,incdec:string ){
    if(incdec=="inc"){
      menuitem.quantity=menuitem.quantity+1;
    }
    else if(incdec=="dec" && menuitem.quantity!=0){
    menuitem.quantity=menuitem.quantity-1;
    }
    this.updateCart();
  }

  public updateCart(){
    this.foodservice.setCartItems(this.menuItems);

  }

  public isCartEmpty(){

    this.menuItems.forEach(element => {
      if(element.quantity>0)
      this.router.navigate(['../checkout']);
    });
    
    this.message="Cart is Empty..!"
  }
  public emptyCart(){
    this.foodservice.removeCartItems();
    this.cartItems=[];
    }
}
