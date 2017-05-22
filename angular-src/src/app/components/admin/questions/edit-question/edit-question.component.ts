import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { Router, ActivatedRoute } from '@angular/router';
import { ValidateService } from '../../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  questionId: Number;
  status: String;
  timesAppeared: String;
  area: String;
  feedback: String;
  question: String;

  options = [
    { id: 'ativa', name: "Ativa" },
    { id: 'inativa', name: "Inativa" }
  ];

  constructor(private validateService: ValidateService,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.take(1).subscribe((params: any) => {
      this.questionId = params['id'];
    });
  }

  ngOnInit() {
    this.authService.getQuestionById(this.questionId).subscribe(data => {
      this.status = data.data.status;
      this.timesAppeared = data.data.timesAppeared;
      this.area = data.data.area;
      this.feedback = data.data.feedback;
      this.question = data.data.question;
    }, err => {
      console.log(err);
      return false;
    });
  }

  onRegisterSubmit() {

    const newQuestion = {
      status: this.status,
      timesAppeared: this.timesAppeared,
      area: this.area,
      feedback: this.feedback,
      question: this.question,
      id: this.questionId
    }

    // Required fields
    if (!this.validateService.validateQuestion(newQuestion)) {
      this.flashMessage.show('Por Favor, preencha todos os campos!', { cssClass: 'alert-danger', timeout: 3000 });
      return false;
    }

    // Register questions
    this.authService.updateQuestion(newQuestion).subscribe(data => {
      if (data.status == "success") {
        this.flashMessage.show('Questão Atualizada com sucesso', { cssClass: 'alert-success', timeout: 3000 });
        this.router.navigate([`/alternatives/edit/${this.questionId}`]);
      } else {
        this.flashMessage.show('Algo deu errado ao Atualizar a questão!', { cssClass: 'alert-danger', timeout: 3000 });
        this.router.navigate([`/question/edit/${this.questionId}`]);
      }
    });
  }
}
