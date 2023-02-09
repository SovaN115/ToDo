import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GategoryComponent } from './gategory.component';

describe('GategoryComponent', () => {
  let component: GategoryComponent;
  let fixture: ComponentFixture<GategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
