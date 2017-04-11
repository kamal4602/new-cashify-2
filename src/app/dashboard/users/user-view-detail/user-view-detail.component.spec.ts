import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewDetailComponent } from './user-view-detail.component';

describe('UserViewDetailComponent', () => {
  let component: UserViewDetailComponent;
  let fixture: ComponentFixture<UserViewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
