import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // Validando os campos de registro
  validateRegister(user) {
    if (!user.name || !user.username || !user.email || !user.password || !user.type)
      return false;
    else
      return true;
  }

  // Validando email
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // Validando os campos de questão
  validateQuestion(newQuestion) {
    if (!newQuestion.question || !newQuestion.timesAppeared || !newQuestion.status || !newQuestion.feedback || !newQuestion.area)
      return false;
    else
      return true;
  }

// Validando as alternativas
  validateAlternatives(alternatives) {
    if (!alternatives[0].alternative || !alternatives[1].alternative || !alternatives[2].alternative || !alternatives[3].alternative)
      return false;
    else
      return true;
  }
}
