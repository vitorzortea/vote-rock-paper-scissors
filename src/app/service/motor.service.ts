import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  baralhoAtual = [];
  maoPlayer = [
    {
      name: 'Pedra',
      value: 1,
      image: '/assets/img/baralho/pedra.jpg',
      imageHand: '/assets/img/baralho/pedra.jpg'
    },
    {
      name: 'Tesoura',
      value: 2,
      image: '/assets/img/baralho/tesoura.jpg',
      imageHand: '/assets/img/baralho/tesoura.jpg'
    },
    {
      name: 'Papel',
      value: 3,
      image: '/assets/img/baralho/papel.jpg',
      imageHand: '/assets/img/baralho/papel.jpg'
    }
  ];
  maoEnemy = [
    {
      name: 'Pedra',
      value: 1,
      image: '/assets/img/baralho/pedra.jpg',
      imageHand: '/assets/img/baralho/pedra.jpg'
    },
    {
      name: 'Tesoura',
      value: 2,
      image: '/assets/img/baralho/tesoura.jpg',
      imageHand: '/assets/img/baralho/tesoura.jpg'
    },
    {
      name: 'Papel',
      value: 3,
      image: '/assets/img/baralho/papel.jpg',
      imageHand: '/assets/img/baralho/papel.jpg'
    }
  ];
  moneyPlayer = 120;
  moneyEnemy = 120;
  cartas = [
    {
      name: 'Pedra',
      value: 1,
      image: '/assets/img/baralho/pedra.jpg',
      imageHand: '/assets/img/baralho/pedra.jpg'
    },
    {
      name: 'Tesoura',
      value: 2,
      image: '/assets/img/baralho/tesoura.jpg',
      imageHand: '/assets/img/baralho/tesoura.jpg'
    },
    {
      name: 'Papel',
      value: 3,
      image: '/assets/img/baralho/papel.jpg',
      imageHand: '/assets/img/baralho/papel.jpg'
    }
  ];

  constructor() { }
}
