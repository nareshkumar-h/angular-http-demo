## Http Client

#### Task 1: Import HttpClientModule in app.module.ts
```
import { HttpClientModule } from '@angular/common/http';

 imports: [
    BrowserModule,HttpClientModule
  ],
  ```
#### Task 2: Inject HttpClient in constructor
```
import { HttpClient } from '@angular/common/http';


constructor(private http:HttpClient) { }
```

#### Task 3: Create a Method to call a Servlet API in service class
```
getProducts(){
    var url = "http://localhost:8080/servlet-webservice-demo/ListProductServletUsingGson";
    return this.http.get<[]>(url);
  }
```
  
#### Task 4.1: Call ProductService Method from component
```
constructor(private productService: ProductService) { }

 products:[];

  loadProducts(){
    this.productService.getProducts().subscribe((res)=>{
      this.products = res;
    });
  }
```

#### Task 4.2: In init method, call the loadProducts method
```
 ngOnInit() {
    this.loadProducts();
  }
  ```

#### Task 5: Add the below content in component html file
```
{{products|json}}
```

#### Internals
* http client returns response as Observable

#### Difference between Promise and Observable
```
Promise

A Promise handles a single event when an async operation completes or fails.

Note: There are Promise libraries out there that support cancellation, but ES6 Promise doesn't so far.

Observable

An Observable is like a Stream (in many languages) and allows to pass zero or more events where the callback is called for each event.
```
