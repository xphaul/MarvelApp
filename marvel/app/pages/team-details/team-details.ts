import {IonicApp, Page, NavParams} from 'ionic-framework/ionic';
import {AddQuestionPage} from "../add-question/add-question";
import {TeamPage} from "../team/team";


@Page({
    templateUrl: 'build/pages/team-details/team-details.html'
})
export class TeamDetailPage {
    constructor(navParams: NavParams) {
        this.navParams = navParams;

        this.owner = this.navParams.get('question').owner;
        this.details = this.navParams.get('question').details;
        this.image = this.navParams.get('question').image;
    }

}
