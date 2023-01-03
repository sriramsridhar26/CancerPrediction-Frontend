import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitforresultComponent } from './waitforresult.component';

describe('WaitforresultComponent', () => {
  let component: WaitforresultComponent;
  let fixture: ComponentFixture<WaitforresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaitforresultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaitforresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
