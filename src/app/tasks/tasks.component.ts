import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks=new FormGroup({
  content:new FormControl('')
})
currentuser:any
  constructor(private service:DataService) { }

  ngOnInit(): void {
    this.service.subject.subscribe(res=>{
      console.log(res);
      this.currentuser=res;
    
    })
   
  }

createtask(){
  let data={
    content:this.tasks.value.content,
    user:this.currentuser.data.user._id
  }
  this.service.createtask(data).subscribe(res=>{
    console.log(res);
  })
}
}
