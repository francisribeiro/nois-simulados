var Login = function(){
    var usuarioInput = element(by.id('inputUsername'));
    var senhaInput = element(by.id('inputPassword'));
    var loginButton = element(by.id('login'));

     this.setUsuario = function(usuario){
        browser.waitForAngularEnabled(false);
        usuarioInput.clear().sendKeys(usuario);
    };

    this.setSenha = function(senha){
        browser.waitForAngularEnabled(false);
        senhaInput.clear().sendKeys(senha);
    };

     this.login = function(){
        browser.waitForAngularEnabled(false);
        return loginButton.click();
    };
};

module.exports = Login;