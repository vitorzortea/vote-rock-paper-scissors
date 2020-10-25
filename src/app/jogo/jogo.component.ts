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
  jogada = {player: 0, enemy: Math.floor(0), resultado: ''};
  maxAposta = Math.min(this.motor.moneyPlayer, this.motor.moneyEnemy);

  constructor(
    public fb: FormBuilder,
    public motor: MotorService,
    public router: Router,
  ) {
    if (!this.motor.maoPlayer[0]) { router.navigate(['/cartas']); }
    if (!this.motor.maoEnemy[0]) { router.navigate(['/cartas']); }
  }

  ngOnInit() {
    this.apostaForm = this.fb.group({ aposta: new FormControl(1) });
  }

  resultado(escolha) {
    this.jogada = { player: escolha, enemy: Math.floor(Math.random() * (this.motor.maoEnemy.length - 1)), resultado: '', };
    this.resultadoKey = true;
    const CartaPlayer = this.motor.maoPlayer[this.jogada.player].value;
    const CartaEnemy = this.motor.maoEnemy[this.jogada.enemy].value;

    if (CartaPlayer === CartaEnemy) {
      this.empate();
    } else if (CartaPlayer === 1 ) {
      (CartaEnemy === 2) ? this.ganhar() : this.perder();
    } else if (CartaPlayer === 2 ) {
      (CartaEnemy === 3) ? this.ganhar() : this.perder();
    } else if (CartaPlayer === 3 ) {
      (CartaEnemy === 1) ? this.ganhar() : this.perder();
    }
    console.log(this.jogada);

    setTimeout(
      () => {
        const deletMao = { player: this.jogada.player, enemy: this.jogada.enemy };
        this.resultadoKey = false;
        this.jogada = {player: 0, enemy: Math.floor(0), resultado: ''};
        this.maxAposta = Math.min(this.motor.moneyPlayer, this.motor.moneyEnemy);
        if (CartaPlayer !== CartaEnemy) {
          (this.motor.moneyEnemy <= 0 || this.motor.moneyPlayer <= 0)
          ? this.router.navigate(['/final'])
          : this.router.navigate(['/cartas']);
        } else {
          this.motor.maoPlayer.splice(deletMao.player, 1);
          this.motor.maoEnemy.splice(deletMao.enemy, 1);
          if (!this.motor.maoPlayer[0]) {
            this.router.navigate(['/cartas']);
          }
        }
      },
      Math.max((50 * this.apostaForm.controls.aposta.value) + 1000, 5000)
    );
  }

  empate() {
    this.jogada.resultado = 'Empate';
    if (!this.motor.maoPlayer[1]) {
      this.jogada.resultado = 'Rodada anulada';
    }
  }
  ganhar() {
    this.jogada.resultado = 'Você Ganhou Essa Rodada';
    for (let i = 0; i <= this.apostaForm.controls.aposta.value; i++ ) {
      setTimeout(() => {
        this.motor.moneyPlayer ++;
        this.motor.moneyEnemy --;
        this.motor.moneyEnemy = Math.max(this.motor.moneyEnemy, 0);
      }, 50 * i );
    }
  }
  perder() {
    this.jogada.resultado = 'Você Perdeu Essa Rodada';
    for (let i = 0; i <= this.apostaForm.controls.aposta.value; i++ ) {
      setTimeout(() => {
        this.motor.moneyEnemy ++;
        this.motor.moneyPlayer --;
        this.motor.moneyPlayer = Math.max(this.motor.moneyPlayer, 0);
      }, 50 * i );
    }
  }

}
