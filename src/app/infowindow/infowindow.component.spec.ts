import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfowindowComponent } from './infowindow.component';

describe('InfowindowComponent', () => {
  let component: InfowindowComponent;
  let fixture: ComponentFixture<InfowindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfowindowComponent]
    });
    fixture = TestBed.createComponent(InfowindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
