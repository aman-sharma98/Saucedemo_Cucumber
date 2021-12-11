@LoginFeature
Feature: Login Feature Scenarios

  Background: Open the login Page
    Given User navigated to Swag Lab login page

  Scenario Outline: Possitive Login Scenario
    When User enters username "<UserName>" and password "<Password>"
    And User clicks on the Login Button
    Then User should be navigated on the product page

    Examples: 
      | UserName      | Password     |
      | standard_user | secret_sauce |

  Scenario Outline: Negetive Login Scenario
    When User enters username "<UserName>" and password "<Password>"
    And User clicks on the Login Button
    Then User should be getting error "<error>"

    Examples: 
      | UserName       | Password  | error                                                                     |
      | abcd@gmail.com | Abcd@r123 | Epic sadface: Username and password do not match any user in this service |
