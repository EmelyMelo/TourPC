import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoFirebaseComponent } from './banco-firebase.component';

describe('BancoFirebaseComponent', () => {
  let component: BancoFirebaseComponent;
  let fixture: ComponentFixture<BancoFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
