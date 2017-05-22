import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-question',
  templateUrl: './add-new-question.component.html',
  styleUrls: ['./add-new-question.component.css']
})
export class AddNewQuestionComponent implements OnInit {

  question: String;
  timesAppeared: String;
  status: String;
  area: String;
  feedback: String;
  selectUndefinedOptionValue: any;

  options = [
    { id: 'ativa', name: "Ativa" },
    { id: 'inativa', name: "Inativa" }
  ];

  constructor(
    private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const newQuestion = {
      status: this.status,
      timesAppeared: this.timesAppeared,
      area: this.area,
      feedback: this.feedback,
      question: this.question
    }

    // Required fields
    if (!this.validateService.validateQuestion(newQuestion)) {
      this.flashMessage.show('Por Favor, preencha todos os campos!', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Register questions
    this.authService.registerQuestion(newQuestion).subscribe(data => {
      if (data.status == "success") {
        this.flashMessage.show('Questão cadastrada com sucesso', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate(['/alternatives/add']);
      } else {
        this.flashMessage.show('Algo deu errado ao cadastrar a questão!', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate(['/question/add']);
      }
    });
  }
}
