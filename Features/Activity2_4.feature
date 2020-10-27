
@activity2_4
Feature: Login Test
  I want to use this template for my feature file

  @smokeTest
  Scenario: Testing Login without Examples
    Given User is on Login page
    When User enters "admin" and "password"
    Then Read the page title and confirmation message
    And Close the Browser
    
  
