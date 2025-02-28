import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttypesComponent } from './testtypes.component';

describe('TesttypesComponent', () => {
  let component: TesttypesComponent;
  let fixture: ComponentFixture<TesttypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesttypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
