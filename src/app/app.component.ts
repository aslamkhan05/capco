import { Component, OnInit } from '@angular/core';
import { SampleserviceService } from './sampleservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  startIndex=0;
  endIndex=0;
  searchId= " ";
  details=[];
  
  constructor(private _service:SampleserviceService){

  }

  ngOnInit(){
    this._service.sample().subscribe(data => this.details=data)
  }
  updatePageNum(length){
    return new Array(length/50);
  }

  updateIndex(pageIndex){
    this.startIndex=pageIndex *50;
    this.endIndex=this.startIndex+50;
    
  }
 
}
