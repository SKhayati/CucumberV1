import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
import {LoginPage} from "../pages/LoginPage"

const loginPage = new LoginPage()

Given("User on orange site", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
});

When("User enters his username {string} and password {string}", (username,pwd) => {
    loginPage.setUsername(username)
    loginPage.setPasword(pwd)
});

When("cliquer sur login", () => {

    loginPage.btLogin()
});

When("cliquer sur le menu", () => {

    loginPage.btMenu()
});

When("cliquer sur logout", () => {

    loginPage.btLogout()
});
Then('verification', () => {
    cy.get('.oxd-button').should('be.visible')
});

Then('User verifies he is connected', () => {
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard')
});