import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

data=''
currentuser:any
taskslist:any
update=false;
tobeupdated:any
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.subject.subscribe(res=>{
      console.log(res);
      this.currentuser=res;
      this.gettasks()
    
    })
   
  }
gettasks(){
  this.service.gettasks("61cac5b71c506cba89dcbd52").subscribe(res=>{
    console.log(res);
    this.taskslist=res
  })
}
createtask(){
  let data={
    content:this.data,
    user:this.currentuser.data.user._id
  }
  this.service.createtask(data).subscribe(res=>{
    console.log(res);
    this.gettasks();
  })
}
delete(id:any){
  this.service.deletetask(id).subscribe(res=>{
    this.gettasks()
  })
}
updatetaskid(id:any,data:any){
this.update=true;   
this.tobeupdated=id;
this.data=data
}
updatetask(){
  this.service.updatetask(this.tobeupdated,{content:this.data}).subscribe(res=>{
    this.data=''
    this.update=false;
    this.gettasks();
  })
}
}
