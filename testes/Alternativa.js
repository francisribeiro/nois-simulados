var Alternativa = function(){
    var aInput = element(by.id('inputAlternativeA'));
    var bInput = element(by.id('inputAlternativeB'));
    var cInput = element(by.id('inputAlternativeC'));
    var dInput = element(by.id('inputAlternativeD'));
    var correta = element(by.id('correta'));
    var finalizarCadastro = element(by.id('finalizarCadastro'));

    this.setLetraA = function(letraA){
        aInput.clear().sendKeys(letraA);
    };

    this.setLetraB = function(letraB){
        bInput.clear().sendKeys(letraB);
    };

    this.setLetraC = function(letraC){
        cInput.clear().sendKeys(letraC);
    };

    this.setLetraD = function(letraD){
        dInput.clear().sendKeys(letraD);
    };

    this.setCorreta = function(){
        correta.click();
    }

    this.finalizarCadastro = function(){
        return finalizarCadastro.click();
    };
};

module.exports = Alternativa;