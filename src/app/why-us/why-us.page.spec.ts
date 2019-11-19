import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WhyUsPage } from './why-us.page';

describe('WhyUsPage', () => {
  let component: WhyUsPage;
  let fixture: ComponentFixture<WhyUsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyUsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WhyUsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
