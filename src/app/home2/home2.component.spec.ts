import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOME2Component } from './home2.component';

describe('HOME2Component', () => {
  let component: HOME2Component;
  let fixture: ComponentFixture<HOME2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HOME2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HOME2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
