import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageWarningComponent } from './message-warning.component';

describe('MessageWarningComponent', () => {
  let component: MessageWarningComponent;
  let fixture: ComponentFixture<MessageWarningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageWarningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
