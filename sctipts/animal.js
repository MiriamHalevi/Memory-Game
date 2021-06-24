export class Animal{
    constructor(name,icon){
        this.name=name;
        this.icon=icon;

    }
    get Compare(){
        return this.name
    }
     draw(number) {
      let card=`<li class="card" id="animal${number}"  data-animal-type="${this.name}">
      <i class="${this.icon}"></i>
       </li>`;
  return card;  
    }
}