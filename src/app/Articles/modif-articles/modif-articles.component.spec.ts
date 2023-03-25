import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifArticlesComponent } from './modif-articles.component';

describe('ModifArticlesComponent', () => {
  let component: ModifArticlesComponent;
  let fixture: ComponentFixture<ModifArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
