import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCategoriesComponent } from './modif-categories.component';

describe('ModifCategoriesComponent', () => {
  let component: ModifCategoriesComponent;
  let fixture: ComponentFixture<ModifCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
