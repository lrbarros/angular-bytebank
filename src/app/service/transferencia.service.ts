import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

private url ='http://localhost:3000/transferencias';

listaTransferencia : any[] ;

constructor(private httpCliente : HttpClient) {
  this.listaTransferencia =[];
}

get transferencias(){
  return this.listaTransferencia;
}
todas():Observable<Transferencia[]>{
  return this.httpCliente.get<Transferencia[]>(this.url);
}
adicionar(transferencia:any): Observable<Transferencia>{
  this.popular(transferencia);

  return this.httpCliente.post<Transferencia>(this.url,transferencia)
}

private popular(transferencia:any){
  transferencia.data = new Date();
}

}
