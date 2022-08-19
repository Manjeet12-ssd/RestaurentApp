import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private _http:HttpClient) { }
    //Now here will be the GET, POST, PUT, DELETE methods.
    //Create Restaurent Using Post Method.
    postRestaurent(data:any){
        return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
          return res;
        }))
    }

    //Get method to get RestaurentApp data here
    getRestaurent(){
      return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
        return res;
      }))
    }

    //update data here for RestaurentApp
    updateRestaurent(data:any, id:number){
      return this._http.put<any>("http://localhost:3000/posts/"+id,data).pipe(map((res:any)=>{
        return res;
      }))
    }

    //delete function here for RestaurentApp
    deleteRestaurent(id:number){
      return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
        return res;
      }))
   }
   //🤫
}
