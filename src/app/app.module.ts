import { NgModule, ErrorHandler, ClassProvider, FactoryProvider } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import { InputArrayComponent } from '../components/input-array/input-array';

@NgModule({
  declarations: [
    MyApp,
    InputArrayComponent,
    AboutPage,
    ContactsPage,
    ContactViewPage,
    ContactEditPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, { mode: 'md' }, {
      links: [
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: ContactsPage, name: 'Contacts', segment: 'contacts' },
        { component: ContactViewPage, name: 'ContactView', segment: 'contactView' },
        { component: ContactEditPage, name: 'ContactEdit', segment: 'contactEdit', defaultHistory: [ContactsPage] },
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: TabsPage, name: 'Tabs', segment: 'tabs' }
      ]
    }),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactsPage,
    ContactViewPage,
    ContactEditPage,
    HomePage,
    TabsPage,
    InputArrayComponent
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler } as ClassProvider,
    {
      provide: Storage,
      useFactory: () => new Storage(['sqlite', 'websql', 'indexeddb', 'localstorage'], { name: 'SmartCircle' })
    } as FactoryProvider,
    ContactService
  ]
})
export class AppModule { }
