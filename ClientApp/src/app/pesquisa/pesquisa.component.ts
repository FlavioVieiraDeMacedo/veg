import { Component, Inject, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})

export class PesquisaComponent implements OnInit{
  public enderecos: EnderecoCorreio;
  public retorno : string;
  formGroup : FormGroup;


   constructor(private http: HttpClient, private fb: FormBuilder) {
      http.get<EnderecoCorreio>('https://viacep.com.br/ws/09560500/json/').subscribe(result => {
        this.enderecos = result;
      }, error => console.error(error));
  }
  ngOnInit() {
    this.formGroup = this.fb.group({
      cep:''
    })
  }

  public Pesquisar(){
    let cep:string = this.formGroup.get('cep').value;
    this.http.get<EnderecoCorreio>('https://viacep.com.br/ws/'+cep.toString()+'/json/').subscribe(result => {
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
