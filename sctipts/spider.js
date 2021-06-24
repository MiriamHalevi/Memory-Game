import { Animal } from "./animal.js";

export class Spider extends Animal{
    constructor(name,icon,id){
      super(name,icon);
      this.id=id;
    }
    
    get GetId(){
        return this.id;
    }
    
}