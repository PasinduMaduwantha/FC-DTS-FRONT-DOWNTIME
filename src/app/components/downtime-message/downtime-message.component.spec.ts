import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowntimeMessageComponent } from './downtime-message.component';

describe('DowntimeMessageComponent', () => {
  let component: DowntimeMessageComponent;
  let fixture: ComponentFixture<DowntimeMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DowntimeMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DowntimeMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
