import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-correios',
  templateUrl: './correios.component.html',
  styleUrls: ['./correios.component.css']
})
export class CorreiosComponent {
  public enderecos: EnderecoCorreio;
  public retorno : string;
  constructor(http: HttpClient) {
    http.get<EnderecoCorreio>('https://viacep.com.br/ws/09560500/json/').subscribe(result => {
      this.enderecos = result;
    }, error => console.error(error));
  }
}

interface EnderecoCorreio {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
}

