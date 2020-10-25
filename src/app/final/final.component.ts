import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MotorService } from '../service/motor.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.styl']
})
export class FinalComponent implements OnInit {
  constructor(
    public motor: MotorService,
    public router: Router
  ) {
    if (this.motor.moneyEnemy !== 0 && this.motor.moneyPlayer !== 0 ) {
      this.router.navigate(['/cartas']);
    }
  }

  ngOnInit() {}
  resetGame() {
    this.motor.moneyPlayer = 120;
    this.motor.moneyEnemy = 120;
    this.router.navigate(['/']);
  }

}
