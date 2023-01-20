import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
list:any[] = [];
  addTask(item:string)
{
  console.log(item);
  if(item != '' && item != null){

    this.list.push({id:this.list.length , name:item});
    console.log('ok');
  }
  else{
    alert('enter valid input');
  }
}
removeTask(id:number){
  console.log(id);
  //remove item from array using id
  this.list = this.list.filter(item => item.id !== id);
}
}
