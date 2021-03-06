import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emps : any;

  constructor(public service : DataService)
   { }

  ngOnInit()
 { 
   let observableResult = this.service.select();
   observableResult.subscribe((result) =>{
        console.log(result);
        this.emps = result
   });

 } 

}
