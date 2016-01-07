import {IonicApp, Page, NavController} from 'ionic-framework/ionic';
import {TeamDetailPage} from "../team-details/team-details";


@Page({
  templateUrl: 'build/pages/team/team.html'
})
export class TeamPage {
  constructor(nav: NavController) {
    this.nav = nav;
    this.pet = 'kittens';

    this.questions = [
        {image: 'https://simplybeautysydney.files.wordpress.com/2013/01/brad-profile-square.jpg', owner: 'Marco', details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam?' },
        {image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2yB2px8qmKYUePyHamJwcMTu6LDd3Em-WYuwU5MPG1hpC2eau', owner: 'Hannah', details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam?' },
        {image: 'http://static1.squarespace.com/static/5102d016e4b0a0147cc59362/t/5204dc75e4b03538026d0c48/1434046364111/Brigid+Profile+Pic+Square.png', owner: 'Joyce', details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam?' },
        {image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWGn7WgIh0_snls-L4Tq30lzq-8gaf6h74G9z0Vw-JuGV1UbI-', owner: 'John', details: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam?' },
    ]
  }
    kittens(pet) {
        console.log(this.value);
    }

    viewQuestion(question) {
        this.nav.push(TeamDetailPage, {
            question: question
        });
    }
}
