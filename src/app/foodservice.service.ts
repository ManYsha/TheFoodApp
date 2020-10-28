import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodMenu } from './food-menu.model';


@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  private cartItems:FoodMenu[]=[];
  private url="http://localhost:4200/assets/data/menu.json";
  constructor(public http:HttpClient) { }

  public getMenuItems(){
    return this.http.get<FoodMenu[]>(this.url);
  }

  public updateCart(cartItems:FoodMenu[]){
    this.saveSessionData();
    this.cartItems=cartItems;
    
  }

  public saveSessionData(){
    sessionStorage.setItem('cart',JSON.stringify(this.cartItems));
  }

  public getSessionData(){
    let sessionCartItems=sessionStorage.getItem('cart');
    this.cartItems=JSON.parse(sessionCartItems);
  }

  public getCartItems(){
    if(this.cartItems.length==0)
    this.getSessionData();
    return this.cartItems;
  }

  public setCartItems(cartItems:FoodMenu[]){
    sessionStorage.setItem('cart',JSON.stringify(cartItems));
  }

  public removeCartItems(){
    sessionStorage.removeItem('cart');
  }
}
