import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup=new FormGroup({
  name:new FormControl(''),
  email:new FormControl(''),
  password:new FormControl('')
})

verification=false
otp:any
  constructor(private router:Router,private service:DataService) { }

  ngOnInit(): void {
    localStorage.clear()
  }
submit(){
  this.signup.value.otp=Math.floor( Math.random()*999 ) + 100;
  this.service.sendmail({email:this.signup.value.email,otp:this.signup.value.otp.toString()}).subscribe(res=>{
    this.verification=true;

  })
  
 
}
// google(){
  
//   this.service.signupgoogle().subscribe(res=>console.log(res));
  
// }
verify(){
  if(this.otp==this.signup.value.otp.toString()){
    
    this.service.signup(this.signup.value).subscribe(res=>{console.log(res)
      this.verification=false;
      
    this.router.navigateByUrl('signin')})
  }else{
    alert('invalid otp')
  }
}
}
