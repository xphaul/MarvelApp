import {IonicApp, Page, NavController, NavParams} from 'ionic-framework/ionic';


@Page({
    templateUrl: 'build/pages/add-question/add-question.html'
})
export class AddQuestionPage {
    constructor(nav: NavController, navParams: NavParams) {
        this.nav = nav;
        this.navParams = navParams;

        this.title = "";
        this.details = "";
    }

    saveQuestion() {
        let newQuestion = {
            title: this.title;
            details: this.details;
        }

        this.navParams.get('QuestionsPage').saveQuestion(newQuestion);
        this.nav.pop();

        console.log(newQuestion);
    }

    closeModal() {
        this.close();
    }
}
