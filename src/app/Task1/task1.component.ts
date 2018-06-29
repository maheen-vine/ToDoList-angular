import { Component, OnInit } from '@angular/core';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
item="Enter Item";
additem:string[]=[];
localitem:string;
parselist:string[];

constructor(){}

  ngOnInit() {}

   Refresh(){

    this.parselist=JSON.parse(localStorage.getItem("localitems"));
     if(this.parselist!=null)
     this.additem=this.parselist;
       }

  Update(){
    this.parselist=JSON.parse(localStorage.getItem("localitems"));
  }

  DisableButton(){
    if(this.item=='Enter Item'|| this.item=='' ){return false;}
    else{return true;}
    }
    
  AddItem(){
    this.additem.push(this.item);
    this.item='';
localStorage.setItem("localitems", JSON.stringify(this.additem));
 //for(let i=0;i<this.localitem.length;i++){
  this.localitem = localStorage.getItem("localitems");
  this.Update();
// this.parselist= JSON.parse(localStorage.getItem("localitems"));

// console.log(this.localitem+ "local");
// console.log(this.additem + "additem");
// console.log(this.parselist + "parselist");

 }
  
  Delete(i){
    this.additem.splice(i,1);
    localStorage.setItem("localitems", JSON.stringify(this.additem));
    // this.parselist=JSON.parse(localStorage.getItem("localitems"));
    this.Update();
  }


}
