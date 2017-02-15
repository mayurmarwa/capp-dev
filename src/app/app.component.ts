import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { Login } from '../pages/login/login';
import { ClientOverview } from '../pages/client-overview/client-overview';  


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = Login;
  public toggleMenu : boolean; 
  public toggleIcon : string; 
  pages: Array<{ title: string, component: any, icon: string, showSubmenu: boolean, submenu : {}}>;
  // subMenus : { title: string, icon: string, showSubmenu: boolean};
  clientSub: Array<{ title: string, component: any}>;
  
  constructor(platform: Platform) {
    platform.ready().then(() => {
      this.toggleMenu = false;
      this.toggleIcon = "ios-add-circle-outline";
      this.pages = [
            //{ title: 'Call Supervisor', component: Callsupervisor },
            //{ title: 'Text Supervisor', component: Textsupervisor },
            //{ title: 'Click Picture', component: Clickpicture },
            //{ title: 'Scan QR Code', component: Scancode },
            //{ title: 'Envoy Action', component: Envoyaction },
            //{ title: 'Test Page', component: Gooffline },
            { title: 'Tabs', 
              component: TabsPage, 
              icon:"ios-add-circle-outline", 
              showSubmenu:false,
              submenu : {
                menu1: "menu1",
                menu2: "menu2"
              }
            },
        ];

      this.clientSub = [
            { title: 'Client Overview', component: ClientOverview },
            { title: 'Manaage Client Business', component: ClientOverview },
            { title: 'Add Client Business', component: ClientOverview },
            { title: 'Import Client', component: ClientOverview },
        ];  
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
  
  //*************************************************************************************
  
  openSubMenu(page) {
        this.nav.setRoot(page.component);
  }

  toggleSubMenu(p) {
    if(p.showSubmenu){
      p.showSubmenu = false;
      p.icon = "ios-add-circle-outline";
    } else {
      p.showSubmenu = true;
      p.icon = "ios-remove-circle-outline";
    }
  }
   
   togglemenu(){
      if(this.toggleMenu){
        this.toggleMenu = false;
        this.toggleIcon = "ios-add-circle-outline";
      } else {
        this.toggleMenu = true;
        this.toggleIcon = "ios-remove-circle-outline";
      }
   }
}
