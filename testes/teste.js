var Inscrever = require('./Inscrever');
var Login = require('./Login');
var Questao = require('./Questao');
var Alternativa = require('./Alternativa');

describe('Teste Simulado', function() {
  it('Teste Inicial', function(done) {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:8081/home').then(function(){
      $('#inscrever').click().then(function(){
        inscrever().then(function(){
          browser.sleep(5000).then(function(){
            login().then(function(){
              browser.sleep(5000).then(function(){
                addConteudo(true).then(function(){
                  addQuestao().then(function(){
                    addQuestaoForm().then(function(){
                      browser.sleep(2000).then(function(){
                        addAlternativa().then(function(){
                          browser.sleep(3000).then(function(){
                             new Questao().viewPrimeiraQuestao().then(function(){
                               browser.sleep(2000).then(function(){
                                 new Questao().atualizarButton().then(function(){
                                   browser.sleep(2000).then(function(){
                                     new Questao().continuarEdicao().then(function(){
                                       browser.sleep(2000).then(function(){
                                         addAlternativa().then(function(){
                                           browser.get('http://localhost:8081/dashboard').then(function(){
                                             browser.sleep(3000).then(function(){
                                              console.log('Teste acabou sem falhas!');
                                             });
                                           });
                                         });
                                       });
                                     });
                                   });
                                 });
                               });
                             });
                          });
                        });
                      });
                    });                    
                  });
                });
              });
            });
          });
        });
      });
    });
  });

  function inscrever(){
    var inscrever = new Inscrever();
    inscrever.setNome('TESTE');
    inscrever.setUsuario('TESTE');
    inscrever.setEmail('TESTE@TESTE.COM');
    inscrever.setSenha('TESTE');
    inscrever.setTipo('Aluno');
    return inscrever.inscrever();
  }

  function login(){
    var login = new Login();
    login.setUsuario('TESTE');
    login.setSenha('TESTE');
    return login.login();
  }

  function addConteudo(questao){
    if(questao){
      var questao = new Questao();
      return questao.addConteudo('Adicionar Questões');
    }else{

    }
  }

  function addQuestao(){
    var questao = new Questao();
    return questao.addQuestao();
  }

  function addQuestaoForm(){
    var questao = new Questao();
    questao.setQuestao('O teste está correto?');
    questao.setArea('Teste');
    questao.setStatus('Ativa');
    questao.setFeedback('Questão muito fácil');
    return questao.addQuestaoButton();
  }

  function addAlternativa(){
    var alternativa = new Alternativa();
    alternativa.setLetraA('Não sei');
    alternativa.setLetraB('Talvez');
    alternativa.setLetraC('Correto');
    alternativa.setLetraD('Errado');
    alternativa.setCorreta();    
    return alternativa.finalizarCadastro();
  }
});

                                      