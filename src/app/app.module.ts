import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { ContactService } from '../providers/contact-service';
import { AboutPage } from '../pages/about/about';
import { ContactsPage } from '../pages/contacts/contacts';
import { ContactViewPage } from '../pages/contact-view/contact-view';
import { ContactEditPage } from '../pages/contact-edit/contact-edit';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactsPage,
    ContactViewPage,
    ContactEditPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactsPage,
    ContactViewPage,
    ContactEditPage,
    HomePage,
    TabsPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    {
      provide: Storage,
      useFactory: () => {
        return new Storage(['sqlite', 'websql', 'indexeddb', 'localstorage'], { name: 'SmartCircle' });
      }
    },
    ContactService
  ]
})
export class AppModule { }
