import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // Validando os campos
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
}
