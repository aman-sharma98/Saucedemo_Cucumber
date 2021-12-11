$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/SauceLogin.feature");
formatter.feature({
  "name": "Login Feature Scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Possitive Login Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be navigated on the product page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigated to Swag Lab login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_navigated_to_swag_lab_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Possitive Login Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "name": "User enters username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be navigated on the product page",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefs.user_should_be_navigated_on_the_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negetive Login Scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be getting error \"\u003cerror\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "error"
      ]
    },
    {
      "cells": [
        "abcd@gmail.com",
        "Abcd@r123",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigated to Swag Lab login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_navigated_to_swag_lab_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Negetive Login Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.step({
  "name": "User enters username \"abcd@gmail.com\" and password \"Abcd@r123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be getting error \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginstepdefs.user_should_be_getting_error_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/SauceProduct.feature");
formatter.feature({
  "name": "Adding Product Scenario",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProductFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Add Product to the cart",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\" and password \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "user adds the product to the cart \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user can see the product added to the cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "product"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Sauce Labs Backpack"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the login Page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User navigated to Swag Lab login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Loginstepdefs.user_navigated_to_swag_lab_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Product to the cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductFeature"
    }
  ]
});
formatter.step({
  "name": "User enters username \"standard_user\" and password \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "Loginstepdefs.user_enters_username_something_and_password_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "Loginstepdefs.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds the product to the cart \"Sauce Labs Backpack\"",
  "keyword": "And "
});
formatter.match({
  "location": "Productstepdefs.user_adds_the_product_to_the_cart_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can see the product added to the cart",
  "keyword": "Then "
});
formatter.match({
  "location": "Productstepdefs.user_can_see_the_product_added_to_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});