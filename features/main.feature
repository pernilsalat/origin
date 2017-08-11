#features/test.feature
Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests

  Scenario: Protractor and Cucumber Test
    Given I go to https://docplanner.doctoralia.es/
    When I log in
    And I make an apointment
    Then I can deleat it