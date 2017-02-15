import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { Dashboard } from '../pages/dashboard/dashboard';
import { PopoverPage } from '../pages/popover/popover';
import { ClientOverview } from '../pages/client-overview/client-overview';
import { Working } from '../pages/working/working';
import { HistoryPage } from '../pages/history/history';
import { Messages } from '../pages/messages/messages';
import { Backup } from '../pages/backup/backup';
import { Debators } from '../pages/debators/debators';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Dashboard,
    PopoverPage,
    ClientOverview,
    Working,
    HistoryPage,
    Messages,
    Backup,
    Debators
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Dashboard,
    PopoverPage,
    ClientOverview,
    Working,
    HistoryPage,
    Messages,
    Backup,
    Debators
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
