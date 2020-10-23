import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  baralhoAtual = [];
  maoPlayer = [];
  maoEnemy = [];
  cartas = [
    { value: 'Pedra', image: '/assets/img/baralho/pedra.jpg'  },
    { value: 'Tesoura', image: '/assets/img/baralho/resoura.jpg'  },
    { value: 'Papel', image: '/assets/img/baralho/papel.jpg'  },
  ];

  constructor() { }
}
