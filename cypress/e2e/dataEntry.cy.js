import Login from "../Page/login";
import dataEntry, { clickDataEntry } from "../Page/dataEntry";

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
        dataEntry.clickDataEntry()
        dataEntry.clickIndicator()
        dataEntry.typeIndicator("1.1.1{enter}")
        dataEntry.selectSource()
        dataEntry.selectDataPeriod()
        dataEntry.selectMetaData()
        dataEntry.enterSummaryData('20')
        dataEntry.saveData()
    });
});