import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
baseurl='http://localhost:8000/users';
subject=new BehaviorSubject('');
  constructor(private http:HttpClient) { }
  signup(data:any){
  return this.http.post(this.baseurl+'/signup',data);
  }
  signupgoogle(){
   return this.http.get(this.baseurl+'/auth/google');
  }
  signin(data:any){
    return this.http.post(this.baseurl+'/signin',data);
  }
  sendmail(data:any){
    return this.http.post(this.baseurl+'/sendmail',data)
  }
  getuserbyid(id:any){
    return this.http.get(this.baseurl+'/getuser/'+id);
  }
  createtask(data:any){
  return this.http.post(this.baseurl+'/task/create',data);
  }
  gettasks(data:any){
    return this.http.get(this.baseurl+'/tasks',data)
  }
  deletetask(id:any){
    return this.http.delete(this.baseurl+'/task/delete/'+id)
  }
  updatetask(id:any,data:any){
    return this.http.post(this.baseurl+'/task/update/'+id,data);
  }
}
