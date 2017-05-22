
import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-alternative',
  templateUrl: './add-new-alternative.component.html',
  styleUrls: ['./add-new-alternative.component.css']
})
export class AddNewAlternativeComponent implements OnInit {
  questionTitle: String;
  question: Object;
  questionId: String;

  options = [
    { id: '0', name: "A) está correta" },
    { id: '1', name: "B) está correta" },
    { id: '2', name: "C) está correta" },
    { id: '3', name: "D) está correta" },
  ];

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getQuestion().subscribe(data => {
      this.question = data.data;
    }, err => {
      console.log(err);
      return false;
    });

    this.authService.getQuestionId().subscribe(data => {
      this.alternatives[0].questionId = data.data.id;
      this.alternatives[1].questionId = data.data.id;
      this.alternatives[2].questionId = data.data.id;
      this.alternatives[3].questionId = data.data.id;
    }, err => {
      console.log(err);
      return false;
    });

  }

  alternatives = [
    { "alternative": "", "correct": false, "questionId": this.questionId },
    { "alternative": "", "correct": false, "questionId": this.questionId },
    { "alternative": "", "correct": false, "questionId": this.questionId },
    { "alternative": "", "correct": false, "questionId": this.questionId },
  ];


  onSelectionChange(entry) {
    this.alternatives[entry].correct = true;
  }

  onRegisterSubmit() {


    // Required fields
    if (!this.validateService.validateAlternatives(this.alternatives)) {
      this.flashMessage.show('Por Favor, preencha todos os campos!', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Register alternatives
    for (let i = 0; i < 4; i++) {
      this.authService.registerAlternative(this.alternatives[i]).subscribe(data => {
        if (i == 3 && data.status == "success") {
          this.flashMessage.show('Questão cadastrada com sucesso', { cssClass: 'alert-success', timeout: 3000 });
          this.router.navigate(['/question']);
        } else if (i == 3 && data.status == "error") {
          this.flashMessage.show('Algo deu errado ao cadastrar as alternativas!', { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate(['/question']);
        }
      });
    }
  }

}
