import { Router } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../service/transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  constructor(private service:TransferenciaService,private router:Router) { }

  ngOnInit(): void {
  }


  valor:number;
  destino:number ;

  transferir(){
    console.log("transferir");
    console.log("valor ",this.valor);
    console.log("destino ",this.destino);
    const valorEmitir :Transferencia = {valor:this.valor,destino:this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado =>{
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');
    },
    (error) => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino=0;
  }
}
