Feature: STC Subscribe page End to End testing

  Scenario Outline: Verify Saudi Arabia subscription packages option types
    Given The user navigate to STC subscription Website
    When The user select Saudi Arabia as country to use
    Then The user should see Lite package for Saudi Arabia
    Then The user should see Classic package for Saudi Arabia
    Then The user should see Premium package for Saudi Arabia

  Scenario Outline: Verify Saudi Arabia subscription packages prices
    Given The user navigate to STC subscription Website
    When The user select Saudi Arabia as country to use
    Then The price for Lite package should be displayed correctly for Saudi Arabia
    Then The price for Classic package should be displayed correctly for Saudi Arabia
    Then The price for Premium package should be displayed correctly for Saudi Arabia

  Scenario Outline: Verify Saudi Arabia subscription packages currencies
    Given The user navigate to STC subscription Website
    When The user select Saudi Arabia as country to use
    Then The currency for Lite package should be displayed correctly for Saudi Arabia
    Then The currency for Classic package should be displayed correctly for Saudi Arabia
    Then The currency for Premium package should be displayed correctly for Saudi Arabia

  Scenario Outline: Verify Kuwait subscription packages option types
    Given The user navigate to STC subscription Website
    When The user select Kuwait as country to use
    Then The user should see Lite package for Kuwait
    Then The user should see Classic package for Kuwait
    Then The user should see Premium package for Kuwait

  Scenario Outline: Verify Kuwait subscription packages prices
    Given The user navigate to STC subscription Website
    When The user select Kuwait as country to use
    Then The price for Lite package should be displayed correctly for Kuwait
    Then The price for Classic package should be displayed correctly for Kuwait
    Then The price for Premium package should be displayed correctly for Kuwait

  Scenario Outline: Verify Kuwait subscription packages currencies
    Given The user navigate to STC subscription Website
    When The user select Kuwait as country to use
    Then The currency for Lite package should be displayed correctly for Kuwait
    Then The currency for Classic package should be displayed correctly for Kuwait
    Then The currency for Premium package should be displayed correctly for Kuwait

  Scenario Outline: Verify Bahrain subscription packages option types
    Given The user navigate to STC subscription Website
    When The user select Bahrain as country to use
    Then The user should see Lite package for Bahrain
    Then The user should see Classic package for Bahrain
    Then The user should see Premium package for Bahrain

  Scenario Outline: Verify Bahrain subscription packages prices
    Given The user navigate to STC subscription Website
    When The user select Bahrain as country to use
    Then The price for Lite package should be displayed correctly for Bahrain
    Then The price for Classic package should be displayed correctly for Bahrain
    Then The price for Premium package should be displayed correctly for Bahrain

  Scenario Outline: Verify Bahrain subscription packages currencies
    Given The user navigate to STC subscription Website
    When The user select Bahrain as country to use
    Then The currency for Lite package should be displayed correctly for Bahrain
    Then The currency for Classic package should be displayed correctly for Bahrain
    Then The currency for Premium package should be displayed correctly for Bahrain
