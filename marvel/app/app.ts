import {App, IonicApp, Platform} from 'ionic-framework/ionic';
import {TeamPage} from './pages/team/team';
import {QuestionsPage} from './pages/questions/questions';
import {GridPage} from './pages/grid/grid';
import {DataService} from './pages/data/data';


@App({
  templateUrl: 'build/app.html',
  providers: [DataService]
})
class MyApp {
  constructor(app: IonicApp, platform: Platform) {
    this.app = app;
    this.platform = platform;

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Team', component: TeamPage },
      { title: 'Questions', component: QuestionsPage },
      { title: 'About', component: GridPage },
    ];

    this.rootPage = TeamPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');

      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
