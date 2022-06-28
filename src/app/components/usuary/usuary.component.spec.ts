import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuaryComponent } from './usuary.component';

describe('UsuaryComponent', () => {
  let component: UsuaryComponent;
  let fixture: ComponentFixture<UsuaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
