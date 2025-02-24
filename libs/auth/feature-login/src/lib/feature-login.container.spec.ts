import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureLoginContainer } from './feature-login.container';

describe('FeatureLoginContainer', () => {
  let component: FeatureLoginContainer;
  let fixture: ComponentFixture<FeatureLoginContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureLoginContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureLoginContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
