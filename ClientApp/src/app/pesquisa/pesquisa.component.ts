import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})

export class PesquisaComponent implements OnInit{
  public enderecos: EnderecoCorreio;
  public retorno : string;
   constructor(private http: HttpClient) {
      http.get<EnderecoCorreio>('https://viacep.com.br/ws/09560500/json/').subscribe(result => {
        this.enderecos = result;
      }, error => console.error(error));
  }
  ngOnInit() {
  }

  Pesquisar(cep){
    this.http.get<EnderecoCorreio>('https://viacep.com.br/ws/'+cep+'/json/').subscribe(result => {
      this.enderecos = result;
    }, error => console.error(error));
  }
}
interface EnderecoCorreio {
  cep: string;
  localidade: string;
  uf: string;
  bairro: string;
}