import {IonicApp, Page, NavParams} from 'ionic-framework/ionic';
import {AddQuestionPage} from "../add-question/add-question";


@Page({
    templateUrl: 'build/pages/question-details/question-details.html'
})
export class QuestionDetailPage {
    constructor(navParams: NavParams) {
        this.navParams = navParams;

        this.title = this.navParams.get('question').title;
        this.details = this.navParams.get('question').details;
    }

}
