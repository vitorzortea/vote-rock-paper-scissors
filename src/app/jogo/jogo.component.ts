import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MotorService } from '../service/motor.service';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.styl']
})
export class JogoComponent implements OnInit {

  apostaForm: FormGroup;
  resultadoKey = false;
  jogada: any;
  maxAposta = 120;

  constructor(
    public fb: FormBuilder,
    public motor: MotorService,
    public router: Router,
  ) {
    if (!this.motor.maoPlayer[0]) { router.navigate(['/cartas']); }
    if (!this.motor.maoEnemy[0]) { router.navigate(['/cartas']); }
    console.log(this.motor.maoPlayer);
    console.log(this.motor.maoEnemy);
  }

  ngOnInit() {
    this.apostaForm = this.fb.group({
      aposta: new FormControl(1),
    });
  }

  resultado(escolha) {
    this.jogada = { player: escolha, enimy: Math.floor(Math.random() * 2), resultado: '', };
    this.resultadoKey = true;
    const CartaPlayer = this.motor.maoPlayer[this.jogada.player].value;
    const CartaEnemy = this.motor.maoEnemy[this.jogada.enimy].value;
    console.log(CartaPlayer, CartaEnemy);

    if (CartaPlayer === CartaEnemy) {
      this.empate();
    } else if (CartaPlayer === 1 ) {
      if (CartaEnemy === 2) { this.ganhar(); } else { this.perder(); }
    } else if (CartaPlayer === 2 ) {
      if (CartaEnemy === 3) { this.ganhar(); } else { this.perder(); }
    } else if (CartaPlayer === 3 ) {
      if (CartaEnemy === 1) { this.ganhar(); } else { this.perder(); }
    }

    setTimeout(() => {
      this.resultadoKey = false;
      this.jogada = null;
    }, 5000);
  }

  empate() {
    this.motor.maoPlayer.splice(this.jogada.player, 1);
    this.motor.maoEnemy.splice(this.jogada.enimy, 1);
    console.log(this.motor.maoPlayer);
    console.log(this.motor.maoEnemy);
    if (!this.motor.maoPlayer[0]) {
      alert('Jogada de empate');
      this.router.navigate(['/cartas']);
    }
  }
  ganhar() {
    for (let i = 0; i <= this.apostaForm.controls.aposta.value; i++ ) {
      setTimeout(() => {
        this.motor.moneyPlayer ++;
        this.motor.moneyEnemy --;
        this.motor.moneyEnemy = Math.max(this.motor.moneyEnemy, 0);
        if ( i === this.apostaForm.controls.aposta.value ) {
          this.maxAposta = Math.min(this.motor.moneyPlayer, this.motor.moneyEnemy);
          (this.motor.moneyEnemy <= 0)
            ? this.router.navigate(['/final'])
            : this.router.navigate(['/cartas']);
        }
      }, 50 * i );
    }
  }
  perder() {
    for (let i = 0; i <= this.apostaForm.controls.aposta.value; i++ ) {
      setTimeout(() => {
        this.motor.moneyEnemy ++;
        this.motor.moneyPlayer --;
        this.motor.moneyPlayer = Math.max(this.motor.moneyPlayer, 0);
        if ( i === this.apostaForm.controls.aposta.value ) {
          this.maxAposta = Math.min(this.motor.moneyPlayer, this.motor.moneyEnemy);
          (this.motor.moneyPlayer <= 0)
            ? this.router.navigate(['/final'])
            : this.router.navigate(['/cartas']);
        }
      }, 50 * i );
    }
  }

}
