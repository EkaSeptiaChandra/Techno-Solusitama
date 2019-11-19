import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: '/about',
      icon: 'people'
    },
    {
      title: 'Why Us',
      url: '/why-us',
      icon: 'clipboard'
    },
    {
      title: 'Our Products',
      url: '/our-products',
      icon: 'cart'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'help-circle'
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'call'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
