import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureTableDataContainer } from './feature-table-data.container';

describe('FeatureTableDataContainer', () => {
  let component: FeatureTableDataContainer;
  let fixture: ComponentFixture<FeatureTableDataContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureTableDataContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureTableDataContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
