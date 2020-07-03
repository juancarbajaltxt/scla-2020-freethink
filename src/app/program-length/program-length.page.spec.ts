import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramLengthPage } from './program-length.page';

describe('ProgramLengthPage', () => {
  let component: ProgramLengthPage;
  let fixture: ComponentFixture<ProgramLengthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramLengthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramLengthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
