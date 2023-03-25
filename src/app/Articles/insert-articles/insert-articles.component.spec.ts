import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertArticlesComponent } from './insert-articles.component';

describe('InsertArticlesComponent', () => {
  let component: InsertArticlesComponent;
  let fixture: ComponentFixture<InsertArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
