import { Component, OnInit } from '@angular/core';
import { FoodMenu } from '../food-menu.model';
import { FoodserviceService } from '../foodservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public cartItems:FoodMenu[];
  public itemTotal:number=0;
  public GST:number=10;
  public totalBill=0;
  message:string;
  constructor(public foodservice:FoodserviceService) { }

  ngOnInit(): void {
    
    this.cartItems=this.foodservice.getCartItems();
    
    this.cartItems.forEach(element => {
      if(element.quantity!=0){
        if(element.discount>0){
          var disc=element.price*element.discount*0.01;
          this.itemTotal=(element.price-disc)*element.quantity;
        }
        else
        this.itemTotal+=element.price*element.quantity;
      }
      
      this.GST=this.itemTotal*this.GST*0.01;
      this.totalBill=this.itemTotal+this.GST;
    });
  }

  public confirmOrder(){
    this.message="Thank You! Your food will be delivered in 30 Minutes..."
  }


}
