import { Animal } from "./animal.js";

export class Fish extends Animal{
    constructor(name,icon,id){
      super(name,icon);
      this.id=id;
    }
    
    get GetId(){
        return this.id;
    }
    
}