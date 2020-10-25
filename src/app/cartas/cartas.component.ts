import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotorService } from '../service/motor.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.styl']
})
export class CartasComponent implements OnInit {

  public selectCard = 0;

  constructor(
    public motor: MotorService,
    public router: Router,
  ) { }

  ngOnInit() {
    this.zerarValores(this.motor.baralhoAtual);
    this.zerarValores(this.motor.maoEnemy);
    this.zerarValores(this.motor.maoPlayer);
    this.embaralhar();
    setTimeout(() => { this.abilitarSelect(); }, 4500);
  }

  zerarValores(array) {
    while (array.length) {
      array.pop();
   }
  }

  embaralhar() {
    console.log(this.motor.cartas);
    for (let i = 0; i < 30; i++) {
      this.motor.baralhoAtual.push(
        this.motor.cartas[Math.floor(Math.random() * 3)]
      );
    }
  }

  abilitarSelect() {
    const inputs = document.querySelectorAll('#baralho input') as NodeListOf<HTMLInputElement>;
    inputs.forEach(e => { e.disabled = false; });
  }

  selctCarta(valor) {
    this.motor.maoPlayer.push(this.motor.baralhoAtual[valor]);
    this.motor.maoEnemy.push(this.motor.baralhoAtual[Math.floor(Math.random() * 30)]);
    this.selectCard++;
    if (this.selectCard === 3) {
      this.router.navigate(['/jogada']);
    }
  }



}
