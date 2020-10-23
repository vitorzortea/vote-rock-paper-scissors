import { Component, OnInit } from '@angular/core';
import { MotorService } from '../service/motor.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.styl']
})
export class CartasComponent implements OnInit {

  constructor(
    public motor: MotorService,
  ) { }

  ngOnInit() {
    this.embaralhar();
  }

  embaralhar() {
    this.motor.baralhoAtual = [];
    console.log(this.motor.cartas);
    for (let i = 0; i < 30; i++) {
      this.motor.baralhoAtual.push(
        this.motor.cartas[Math.floor(Math.random() * 3)]
      );
    }
    console.log(this.motor.baralhoAtual);
  }

}
