import { Component, OnInit } from "@angular/core";
import {Recipe} from '../recipe.model'

@Component({
selector:'app-recipe-list',
templateUrl:'./recipe-list.component.html',
styleUrls:['./recipe-list.component.css']
})


export class RecipeListComponent {
    recipes:Recipe[]=[
new Recipe('A Test Recipe',
'This is simply a test',
'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg')];

    
}