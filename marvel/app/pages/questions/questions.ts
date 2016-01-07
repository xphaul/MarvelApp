import {IonicApp, Page, NavController, NavParams, Modal} from 'ionic-framework/ionic';
import {AddQuestionPage} from "../add-question/add-question";
import {QuestionDetailPage} from "../question-details/question-details";
import {DataService} from "../data/data";


@Page({
  templateUrl: 'build/pages/questions/questions.html'
})
export class QuestionsPage {
  constructor(nav: NavController, modal: Modal, dataService: DataService) {
    this.modal = modal;
    this.nav = nav;
    this.dataService = dataService;

    this.questions = [];

    this.dataService.getData().then((marv) => {
          this.questions = JSON.parse(marv) || [];
      });
  }
    saveQuestion(question) {
        this.questions.push(question);
        this.dataService.save(question);
    }

    openContactModal() {
        this.modal.open(AddQuestionPage);
    }

    viewQuestion (question) {
        this.nav.push(QuestionDetailPage, {
            question: question
        });
    }
}
