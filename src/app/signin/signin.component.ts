import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
signin=new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
})
currentuser:any
  constructor(private service:DataService,private router:Router) { }

  ngOnInit(): void {
    localStorage.clear()
  }
submit(){
this.service.signin(this.signin.value).subscribe(res=>{console.log(res);
  this.currentuser=res;
  localStorage.setItem('signin','true');
  localStorage.setItem('user',this.currentuser)
  this.service.subject.next(this.currentuser)
  this.router.navigateByUrl('tasks')
},(err)=>{
alert(err.error.text);

});
}
}
