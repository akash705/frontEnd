import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private data={
    loggedIn:false,
    uuid:'/',
  }
  private url="";
  constructor(private httpClient:HttpClient) {

   }

  signUp(data){
      return new Promise((res,rej)=>{
        this.httpClient.get(this.url+'signUp',{
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
      this.httpClient.post(this.url+'login',{
        params:data,
      }).subscribe((data:Response)=>{
        if(data.status){
          this.data.loggedIn= true;
          this.data.uuid=data['uuid'];
          res({status:true,uid:data['uuid']});
        }
      })
    })
  }
  getLoggedInStatus(){
    return this.data.loggedIn;
  }
  getUid(){
    return this.data.uuid;
  }
}
