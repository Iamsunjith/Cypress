/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("Quote Creation For Protection", () => {
    beforeEach(() => {
      // Cypress starts out with a blank slate for each test
      // so we must tell it to visit our website with the `cy.visit()` command.
      // Since we want to visit the same URL at the start of all our tests,
      // we include it in our beforeEach function so that it runs before each test
      cy.visit("https://uat.bancaedge.com");
    });
  
    it("Create Lead Flow Test", async () => {
      cy.contains("Login");
      cy.get("div.main-container").should("exist");
      cy.get("div.action > button").should("exist");
      cy.get("input[placeholder='Username']").should("exist");
      // Adding User Name
      cy.get("input[placeholder='Username']").type("bombranchuser");
      // Adding Password
      cy.get("input[placeholder='Password']").type("^4jNrDyi976X");
      cy.get("div.action > button[type='submit']").click();
      cy.contains("Select Customer By").should("exist");
      cy.get("div.search-div > button").should("be.disabled");
      // Enter the CIF
      cy.get('input[formcontrolname="inputNumber"]').type("10002152447");
      cy.get("div.search-div > button").should("be.enabled");
      cy.get("div.search-div > button").click();
      cy.contains("Basic Information").should("exist");
      // Click on Create Lead
      cy.contains("Create Lead").click();
      // Select Insurer
      cy.get('#mat-select-0 > .mat-select-trigger > .mat-select-value > .mat-select-placeholder').click();
      cy.get('#mat-option-1').click()
      // Select LOB
      cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click()
      cy.get('#mat-option-104').click()
      // Select Product
      cy.get(':nth-child(3) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click()
      cy.get('#mat-option-108').click();
      // Select SP
      cy.get(':nth-child(4) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click()
      cy.get('#mat-option-4').click()
      // Lead Generator
      cy.get(':nth-child(8) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click()
      cy.get('#mat-option-65').click()
      // Sum Assured
      cy.get(':nth-child(9) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type("100000")
      // Policy Term
      cy.get(':nth-child(10) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type("30")
      // Premium Paying Term
      // cy.get(':nth-child(10) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type("10")
      cy.get(':nth-child(11) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type("10")
      // Mode
      cy.get(':nth-child(12) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click().wait(2000)
      cy.get('#mat-option-57').click()
      // Total Premium with GST
      cy.get(':nth-child(13) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type("12000")
      // Base Premium
      cy.get(':nth-child(14) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type("11000")
      // Next
      cy.get('.text-align-right > .mat-focus-indicator').click()

      // Title
      cy.get(':nth-child(2) > .mat-card-content > [fxlayout="row wrap"] > :nth-child(1) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click()
      // Mr
      cy.get('#mat-option-115').click()
      // 
      cy.get(':nth-child(2) > .mat-card-content > [fxlayout="row wrap"] > :nth-child(6) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').click()
      // Single
      cy.get('#mat-option-120').click()
      // Next
      cy.get('#cdk-step-content-0-1 > form.ng-star-inserted > .text-align-right > .next-btn').click()
      // Is Address same (Y)
      cy.get('#mat-radio-5 > .mat-radio-label > .mat-radio-container > .mat-radio-outer-circle').click()

      // Next
      cy.get('#cdk-step-content-0-2 > .ng-star-inserted.ng-valid > .text-align-right > .next-btn').click()
      // Submit
      cy.get('form.ng-untouched > .text-align-right > .next-btn').click()
    });
    it("One Minute Flow Test", async () => {
      cy.contains("Login");
      cy.get("div.main-container").should("exist");
      cy.get("div.action > button").should("exist");
      cy.get("input[placeholder='Username']").should("exist");
      // Adding User Name
      cy.get("input[placeholder='Username']").type("bombranchuser");
      // Adding Password
      cy.get("input[placeholder='Password']").type("^4jNrDyi976X");
      cy.get("div.action > button[type='submit']").click();
      cy.contains("Select Customer By").should("exist");
      cy.get("div.search-div > button").should("be.disabled");
      // Enter the CIF
      cy.get('input[formcontrolname="inputNumber"]').type("10002152447");
      cy.get("div.search-div > button").should("be.enabled");
      cy.get("div.search-div > button").click();
      cy.contains("Basic Information").should("exist");
      // Click on Create Lead
      cy.contains("One Minute Plan").click();
      // Single
      cy.get(':nth-child(1) > .maritalStatus-img').click();
      // Next
      cy.get('.nxt-div > .mat-focus-indicator').click()
      // Moderate
      cy.get(':nth-child(2) > .risk-images').click()
      // Next
      cy.get('.nxt-div > .mat-focus-indicator').click()
      // Annualy Income
      cy.get('#mat-input-3').type("1000000")
      // Next 
      cy.get('.nxt-div > .mat-focus-indicator').click()
      // 
      cy.contains("Need Analysis").click()
    });
    it.only("Quick Quote || Health Flow Test", async () => {
      cy.contains("Login");
      cy.get("div.main-container").should("exist");
      cy.get("div.action > button").should("exist");
      cy.get("input[placeholder='Username']").should("exist");
      // Adding User Name
      cy.get("input[placeholder='Username']").type("bombranchuser");
      // Adding Password
      cy.get("input[placeholder='Password']").type("^4jNrDyi976X");
      cy.get("div.action > button[type='submit']").click();
      cy.contains("Select Customer By").should("exist");
      cy.get("div.search-div > button").should("be.disabled");
      // Enter the CIF
      cy.get('input[formcontrolname="inputNumber"]').type("10002152447");
      cy.get("div.search-div > button").should("be.enabled");
      cy.get("div.search-div > button").click();
      cy.contains("Basic Information").should("exist");
      // Click on Create Lead
      cy.contains("Quick Quote").click();
      // 
      cy.contains("Health Insurance").parent().siblings().click();
      // 
      // cy.contains("Health Insurance")
      // cy.get("form :nth-child(3) :nth-child(1) :nth-child(1)]")
      cy.contains("What type of Policy do you wish to buy?").parent().siblings().get(":nth-child(1)");
  
    });

  });
  