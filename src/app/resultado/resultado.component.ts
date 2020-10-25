import { Component, Input, OnInit } from '@angular/core';
import { MotorService } from '../service/motor.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.styl']
})
export class ResultadoComponent implements OnInit {

  @Input() jogada;

  constructor(
    public motor: MotorService
  ) { }

  ngOnInit() { }

}
