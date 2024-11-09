

import Login from "../Page/login";

describe('Login', () => {
    it('passes', () => {
        cy.visit('https://uat-sdg.oss.net.bd/');
        cy.wait(3000);

        // Login
        Login.clickNavlogin()
        Login.clickSystemLogin();
        Login.setUsername('300000000292');
        Login.setPassword('123456a@');
        Login.clickLogin();
    });
});

