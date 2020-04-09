import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelParseComponent } from './excel-parse.component';

describe('ExcelParseComponent', () => {
  let component: ExcelParseComponent;
  let fixture: ComponentFixture<ExcelParseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelParseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelParseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
