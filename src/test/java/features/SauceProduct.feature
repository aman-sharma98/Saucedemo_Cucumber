@ProductFeature
Feature: Adding Product Scenario

  Background: Open the login Page
    Given User navigated to Swag Lab login page

  Scenario Outline: Add Product to the cart
    When User enters username "<UserName>" and password "<Password>"
    And User clicks on the Login Button
    And user adds the product to the cart "<product>"
    Then user can see the product added to the cart

    Examples: 
      | UserName      | Password     | product             |
      | standard_user | secret_sauce | Sauce Labs Backpack |
