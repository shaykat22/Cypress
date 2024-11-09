class Login 
{
    loginNav = 'div[class="topBtnLogin"]'
    systemLogin = 'div>span'
    username = 'input[id="username"]'
    password = 'input[id="password"]'
    login = 'input[name="login"]'

    clickNavlogin()
    {
        cy.get(this.loginNav).click()
    }
    clickSystemLogin()
    {
        cy.get(this.systemLogin).contains('System Login').click()
    }
    setUsername(username)
    {
        cy.get(this.username).type(username)
    }
    setPassword(password)
    {
        cy.get(this.password).type(password)
    }
    clickLogin()
    {
        cy.get(this.login).click()
    }
}

module.exports = new Login()