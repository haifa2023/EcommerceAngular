import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertScategoriesComponent } from './insert-scategories.component';

describe('InsertScategoriesComponent', () => {
  let component: InsertScategoriesComponent;
  let fixture: ComponentFixture<InsertScategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertScategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertScategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
