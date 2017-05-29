var Inscrever = function(){
    
    var nomeInput = element(by.id('inputNome'));
    var usuarioInput = element(by.id('inputUsuario'));
    var emailInput = element(by.id('inputEmail'));
    var senhaInput = element(by.id('inputPassword'));
    var inscreverButton = element(by.id('inscrever'));
    var tipoInput = element(by.id('inputTipo'));
    
    this.setNome = function(nome){
		browser.waitForAngularEnabled(false);
        nomeInput.clear().sendKeys(nome);
	};

    this.setUsuario = function(usuario){
        browser.waitForAngularEnabled(false);
        usuarioInput.clear().sendKeys(usuario);
    };

    this.setEmail = function(email){
        browser.waitForAngularEnabled(false);
        emailInput.clear().sendKeys(email);
    }

    this.setSenha = function(senha){
        browser.waitForAngularEnabled(false);
        senhaInput.clear().sendKeys(senha);
    };

    this.setTipo = function(index){
        browser.waitForAngularEnabled(false);
        tipoInput.all(by.xpath('option[.="' + index + '"]')).click();
    };

    this.inscrever = function(){
        browser.waitForAngularEnabled(false);
        return inscreverButton.click();
    }
};

module.exports = Inscrever;