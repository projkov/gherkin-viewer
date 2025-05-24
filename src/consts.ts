export const enum StorageKey {
    Requests = "FHIRPathUIRequests",
    Expressions = "FHIRPathUIExpressions",
    Settings = "FHIRPathUISettings",
    Executions = "FHIRPathUIExecutions"
}

export const enum SettingsKey {
    AUTH_HEADER = "authorization_header",
    EXECUTIONS_HIST_MAX = "executions_history_max",
    RES_OUTPUT_FORMAT = "resource_output_format"
}

export const defaultEditorValue = `
# Feature 1: User Login
Feature: User Authentication
  As a user
  I want to log in to the system
  So that I can access my account

Background:
    Given the following users exist:
      | email | password |
      | user1@test.com | pass123 |
      | user2@test.com | qwerty |

    Scenario: Successful login with valid credentials
    When I enter "user1@test.com" as email
    And I enter "pass123" as password
    And I click the login button
    Then I should see "Welcome, User1!"

Scenario: Failed login with invalid password
    When I enter "user2@test.com" as email
    And I enter "wrongpass" as password
    And I click the login button
    Then I should see "Invalid credentials"

# Feature 2: Shopping Cart Management
Feature: Shopping Cart
  As a customer
  I want to manage my shopping cart
  So that I can purchase desired items

Scenario: Add item to cart
    Given I am on the product page for "Laptop"
    When I click "Add to Cart"
    Then my cart should contain "Laptop"
    And the cart total should be "$999.99"

Scenario: Remove item from cart
    Given my cart contains "Laptop" and "Mouse"
    When I remove "Mouse" from the cart
    Then my cart should only contain "Laptop"

  Scenario Outline: Checkout with multiple items
    Given my cart contains the following items:
      | item | price |
      | <item1> | <price1>|
      | <item2> | <price2>|
    When I proceed to checkout
    Then the total should be "<total>"

Examples:
      | item1 | price1 | item2 | price2 | total |
      | Laptop | 999.99 | Mouse | 25.50 | 1025.49 |
      | Book | 15.99 | Keyboard | 45.00 | 60.99 |

# Feature 3: Search Functionality
Feature: Product Search
  As a shopper
  I want to search for products
  So that I can find what I need quickly

Scenario: Search by exact name
    Given I am on the homepage
    When I search for "Wireless Headphones"
    Then I should see at least 3 results
    And the first result should be "Sony Wireless Headphones"

Scenario: Search with no results
    Given I am on the homepage
    When I search for "Nonexistent Product"
    Then I should see "No products found"
`
