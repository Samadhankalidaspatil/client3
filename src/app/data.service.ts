import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{
 
  constructor( private helper :HttpClient) 
  
  { }
  select()
   {
     return this.helper.get("http://localhost:9899/emp");
   }
   selectByNo(No) 
   {
   return this.helper.get("http://localhost:9899/emp/" +No);
  }
  Update(empobj)
  {
    return this.helper.put("http://localhost:9899/emp/"+empobj.No, empobj);
  }

}
