import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifScategoriesComponent } from './modif-scategories.component';

describe('ModifScategoriesComponent', () => {
  let component: ModifScategoriesComponent;
  let fixture: ComponentFixture<ModifScategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifScategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifScategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
