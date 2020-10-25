import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  baralhoAtual = [];
  maoPlayer = [];
  maoEnemy = [];
  moneyPlayer = 120;
  moneyEnemy = 120;
  cartas = [
    {
      name: 'Pedra',
      value: 1,
      image: '/assets/img/baralho/pedra.jpg',
      imageHand: '/assets/img/baralho/hand-pedra.png'
    },
    {
      name: 'Tesoura',
      value: 2,
      image: '/assets/img/baralho/tesoura.jpg',
      imageHand: '/assets/img/baralho/hand-tesoura.png'
    },
    {
      name: 'Papel',
      value: 3,
      image: '/assets/img/baralho/papel.jpg',
      imageHand: '/assets/img/baralho/hand-papel.png'
    }
  ];

  constructor() { }
}
