import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigWindowComponent } from './config-window.component';

describe('ConfigWindowComponent', () => {
  let component: ConfigWindowComponent;
  let fixture: ComponentFixture<ConfigWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
