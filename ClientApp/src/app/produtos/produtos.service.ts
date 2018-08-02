import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { ObservableInput, Observable } from '../../../node_modules/rxjs/Observable';

@Injectable()
export class ProdutosService {

  private apiURL = this.baseUrl + "api/produtos";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

getProdutos() : Observable<string>{
  return this.http.get<string>(this.apiURL);
}

}
