import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iinfo } from './info';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {

  constructor(private http:HttpClient) { }
  

  private _url:string = "/assets/sample_data.json";

  sample():Observable<Iinfo[]>{
    return this.http.get<Iinfo[]>(this._url)
  }
}
