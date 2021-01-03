import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatelseComponent } from './whatelse.component';

describe('WhatelseComponent', () => {
  let component: WhatelseComponent;
  let fixture: ComponentFixture<WhatelseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatelseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatelseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
