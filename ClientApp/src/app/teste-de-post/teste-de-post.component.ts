import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-teste-de-post',
  templateUrl: './teste-de-post.component.html',
  styleUrls: ['./teste-de-post.component.css']
})
export class TesteDePostComponent{

 public retorno : string;
 constructor(http: HttpClient) {
   var json = JSON.stringify({var1: 'teste', var2: 1000});
   var params = 'json=' + json;
   var config = {
     headers : {
         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
     }
 }
   http.post<string>('http://validate.jsontest.com', params,config).subscribe(
     data => this.retorno = JSON.stringify(data),
     error => alert(error),
     () => console.log("acesso a webapi post ok...")
  );
 }

}
