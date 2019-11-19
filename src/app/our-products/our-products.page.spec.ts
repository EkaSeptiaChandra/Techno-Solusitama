import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OurProductsPage } from './our-products.page';

describe('OurProductsPage', () => {
  let component: OurProductsPage;
  let fixture: ComponentFixture<OurProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OurProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
