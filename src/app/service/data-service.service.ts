import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data={
    loggedIn:false,
    uuid:'',
  }
  constructor(private httpClient:HttpClient) {

   }

  signUp(data){
      return new Promise((res,rej)=>{
        this.httpClient.post('localhost:8080/postData',{
          params:data,
        }).subscribe((data:Response)=>{
          if(data.status){
            res({status:true});
          }
        })
      })
  }
  login(data){
    return new Promise((res,rej)=>{
      this.httpClient.post('localhost:8080/login',{
        params:data,
      }).subscribe((data:Response)=>{
        if(data.status){
          this.data.loggedIn= true;
          res({status:true,uid:data['uid']});
        }
      })
    })
  }
  getLoggedInStatus(){
    return this.data.loggedIn;
  }
}
