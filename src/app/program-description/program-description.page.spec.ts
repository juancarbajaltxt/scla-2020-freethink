import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramDescriptionPage } from './program-description.page';

describe('ProgramDescriptionPage', () => {
  let component: ProgramDescriptionPage;
  let fixture: ComponentFixture<ProgramDescriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramDescriptionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
