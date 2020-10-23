import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasComponent } from './cartas.component';

describe('CartasComponent', () => {
  let component: CartasComponent;
  let fixture: ComponentFixture<CartasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
