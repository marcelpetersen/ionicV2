import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Renderer} from 'angular2/core'
import {HomePage} from './pages/home/home';

import * as demoPages from './pages/demo-pages/demo-pages';
import * as httpDemo from './pages/httpRequest/httpRequest';
import * as networkInfo from './pages/network/network';
import * as media from './pages/media/media';
import * as device from './pages/device/device';
import * as qrcode from './pages/qr-code/qr-code';
import * as appBrowser from './pages/app-browser/app-browser';
import * as email from './pages/email/email';
import * as maps from './pages/maps/maps';
import * as api from './pages/api/api';
import * as forms from './pages/complex-forms/complex-forms';
import * as formDynamic from './pages/form-dynamic/form-dynamic';
import {WeatherPage} from './pages/weather/weather';

declare var WL: any; 

@App({
  templateUrl: 'build/app.html',
  config: { // http://ionicframework.com/docs/v2/api/config/Config/
    backButtonText: 'Retour'
  },
})


class MyApp {
  // make HelloIonicPage the root (or first) page
  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, icon: string }>;
  env: any;

  constructor(
    private app: IonicApp,
    private platform: Platform,
    private menu: MenuController,
    renderer: Renderer
  ) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      
    });
    renderer.listenGlobal('document', 'wlInitFinished', () => {
      console.log('MFP => wlInitFinished event received');
      console.log("MFP => Env:", WL.Client.getEnvironment());
      this.env = WL.Client.getEnvironment();
      this.MFPInit();
    })
    this.initializeApp();
    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'API', component: api.ApiPage, icon: 'apps' },
      { title: 'Http', component: httpDemo.MovieListPage, icon: 'keypad' },
      { title: 'Network', component: networkInfo.networkPage, icon: 'wifi' },
      { title: 'Composants', component: demoPages.DemoPagesPage, icon: 'desktop' },
      { title: 'Media', component: media.MediaPage, icon: 'images' },
      { title: 'Device', component: device.DevicePage, icon: 'phone-portrait' },
      { title: 'QrCode', component: qrcode.QrCodePage, icon: 'qr-scanner' },
      { title: 'Web', component: appBrowser.AppBrowserPage, icon: 'send' },
      { title: 'Email', component: email.EmailPage, icon: 'mail' },
      { title: 'Carte', component: maps.MapsPage, icon: 'locate' },
      { title: 'Météo', component: WeatherPage, icon: 'cloud' },
      { title: 'Formulaires', component: forms.ComplexFormsPage, icon: 'checkbox' },
      { title: 'Form Dynamic', component: formDynamic.FormDynamicPage, icon: 'checkbox' }
    ];
  }
  MFPInit() {
    this.rootPage = HomePage;
  }
  initializeApp() { }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
