import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailNameComponent } from './detail-name.component';

describe('DetailNameComponent', () => {
  let component: DetailNameComponent;
  let fixture: ComponentFixture<DetailNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
