import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaddingpageComponent } from './laddingpage.component';

describe('LaddingpageComponent', () => {
  let component: LaddingpageComponent;
  let fixture: ComponentFixture<LaddingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaddingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaddingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
