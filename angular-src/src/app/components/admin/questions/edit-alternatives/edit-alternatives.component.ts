import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { ValidateService } from '../../../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-alternatives',
  templateUrl: './edit-alternatives.component.html',
  styleUrls: ['./edit-alternatives.component.css']
})
export class EditAlternativesComponent implements OnInit {
  questionTitle: String;
  question: Object;
  questionId: Number;
  alternatives:Object;

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
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.take(1).subscribe((params: any) => {
      this.questionId = params['id'];
    });
  }

  ngOnInit() {
    this.authService.getAllAlternatives(this.questionId).subscribe(data => {
      this.alternatives = data.data;
    }, err => {
      console.log(err);
      return false;
    });

  }

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
      this.authService.UpdateAlternative(this.alternatives[i]).subscribe(data => {
        console.log('twssetse');
        if (i == 3 && data.status == "success") {
          this.flashMessage.show('Alternativas atualizadas com sucesso', { cssClass: 'alert-success', timeout: 3000 });
          this.router.navigate(['/question']);
        } else if (i == 3 && data.status == "error") {
          this.flashMessage.show('Algo deu errado ao cadastrar as alternativas!', { cssClass: 'alert-danger', timeout: 3000 });
          this.router.navigate([`/alternatives/edit/${this.questionId}`]);
        }
      });
    }
  }

}
