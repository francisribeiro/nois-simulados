var Questao = function(){

    var adicionarConteudo = element(by.id('adicionarConteudo'));
    var adicionarQuestao = element(by.id('addQuestao'));

    var questaoInput = element(by.id('inputQuestion'));
    var areaInput = element(by.id('inputArea'));
    var statusInput = element(by.id('inputStatus'));
    var feedbackInput = element(by.id('inputFeedback'));
    var questaoButton = element(by.id('continuarCadastro'));

    var atualizarButton = element(by.id('atualizarButton'));
    var continuarEdicao = element(by.id('continuarEdicao'));
    
    this.addConteudo = function(){
       browser.waitForAngularEnabled(false);
       return adicionarConteudo.click();
    };

    this.addQuestao = function(){
       browser.waitForAngularEnabled(false);
       return adicionarQuestao.click();
    };

    this.setQuestao = function(questao){
        browser.waitForAngularEnabled(false);
        questaoInput.clear().sendKeys(questao);
    };

    this.setArea = function(area){
        browser.waitForAngularEnabled(false);
        areaInput.clear().sendKeys(area);
    };

    this.setStatus = function(status){
        browser.waitForAngularEnabled(false);
        statusInput.all(by.xpath('option[.="' + status + '"]')).click();
    };

    this.setFeedback = function(feedback){
        feedbackInput.clear().sendKeys(feedback);
    };

    this.addQuestaoButton = function(){
        return questaoButton.click();
    };

    this.viewPrimeiraQuestao = function(){
       var table = element.all(by.id('questoesTable'));
        var tbody = table.all(by.tagName('tbody'));
        var tr = tbody.all(by.tagName('tr'));
        var firstTr = tr.get(1);
        var td = firstTr.all(by.tagName('td'));
        return td.get(2).element(by.id('visualizar')).click();
    };

    this.atualizarButton = function(){
        return atualizarButton.click();
    };

    this.continuarEdicao = function(){
        return continuarEdicao.click();
    };
};

module.exports = Questao;