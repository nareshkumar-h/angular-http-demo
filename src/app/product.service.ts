import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(){
    var url = "http://localhost:8080/servlet-webservice-demo/ListProductServletUsingGson";
    return this.http.get<[]>(url);
  }

}
