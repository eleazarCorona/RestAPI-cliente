import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectorApiPublicaComponent } from './lector-api-publica.component';

describe('LectorApiPublicaComponent', () => {
  let component: LectorApiPublicaComponent;
  let fixture: ComponentFixture<LectorApiPublicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LectorApiPublicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LectorApiPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
