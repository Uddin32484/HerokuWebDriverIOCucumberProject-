# WebdriverIO BDD Test Automation Project

[![CI](https://github.com/YOUR_USERNAME/HerokuProjecctBDD/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/HerokuProjecctBDD/actions/workflows/ci.yml)
[![Scheduled Tests](https://github.com/YOUR_USERNAME/HerokuProjecctBDD/actions/workflows/scheduled-tests.yml/badge.svg)](https://github.com/YOUR_USERNAME/HerokuProjecctBDD/actions/workflows/scheduled-tests.yml)

This project demonstrates automated testing using WebdriverIO with Cucumber (BDD) framework for testing the Heroku test application login functionality.

## Project Structure

```
HerokuProjecctBDD/
├── features/
│   ├── login.feature              # Feature file with test scenarios
│   ├── pageobjects/
│   │   ├── page.js               # Base page class
│   │   ├── login.page.js         # Login page object
│   │   └── secure.page.js        # Secure page object
│   └── step-definitions/
│       └── steps.js              # Step definitions for scenarios
├── allure-results/               # Test reports directory
├── package.json                  # Project dependencies
├── wdio.conf.js                 # WebdriverIO configuration
└── README.md                    # This file
```

## Features Tested

### Login Functionality
- **Valid Login**: Tests successful login with correct credentials
- **Invalid Login**: Tests error handling with incorrect credentials

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Chrome browser (for test execution)

## Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd HerokuProjecctBDD
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Dependencies

The project uses the following key dependencies:

- **@wdio/cli**: WebdriverIO command-line interface
- **@wdio/local-runner**: Local test runner
- **@wdio/cucumber-framework**: Cucumber framework integration
- **@wdio/spec-reporter**: Test results reporter
- **@wdio/allure-reporter**: Allure reporting integration

## Configuration

The project is configured in `wdio.conf.js` with:
- **Browser**: Chrome (headless mode available)
- **Framework**: Cucumber
- **Reporters**: Spec and Allure
- **Test Location**: `./features/**/*.feature`
- **Step Definitions**: `./features/step-definitions/steps.js`

## Test Scenarios

The `login.feature` file contains test scenarios using Scenario Outline:

| Test Case | Username | Password | Expected Message |
|-----------|----------|----------|------------------|
| Valid Login | tomsmith | SuperSecretPassword! | You logged into a secure area! |
| Invalid Login | foobar | barfoo | Your username is invalid! |

## Running Tests

### Run All Tests
```bash
npm test
# or
npm run wdio
```

### Run Tests in Headless Mode (CI/CD)
```bash
npm run test:ci
```

### Run Tests with Debug Logging
```bash
npm run test:debug
```

### Run Specific Feature
```bash
npx wdio run wdio.conf.js --spec=features/login.feature
```

## CI/CD Pipeline

This project includes GitHub Actions workflows for automated testing:

### Continuous Integration (`ci.yml`)
- **Triggers**: Push/PR to main, master, or develop branches
- **Node.js Versions**: 18.x, 20.x
- **Browser**: Chrome (headless mode)
- **Reports**: Generates Allure reports and deploys to GitHub Pages
- **Artifacts**: Stores test results and screenshots

### Scheduled Testing (`scheduled-tests.yml`)
- **Schedule**: Daily at 6 AM UTC
- **Purpose**: Monitor application stability
- **Auto-Issue Creation**: Creates GitHub issues on test failures

### Setting Up CI/CD
1. Push your code to GitHub
2. The workflows will automatically run on push/PR
3. View test results in the Actions tab
4. Allure reports are deployed to GitHub Pages (if enabled)

To enable GitHub Pages for reports:
1. Go to repository Settings > Pages
2. Select "Deploy from a branch"
3. Choose "gh-pages" branch

## Page Object Model

The project follows the Page Object Model (POM) pattern:

### Base Page (`page.js`)
- Contains common functionality for all pages
- Handles navigation to the login URL

### Login Page (`login.page.js`)
- Extends the base page
- Contains selectors and methods for login functionality:
  - `inputUserName`: Username input field
  - `inputPassword`: Password input field
  - `btnSubmit`: Submit button
  - `flashAlert`: Success/error message element

## Step Definitions

Located in `features/step-definitions/steps.js`:

- **Given**: `I am on the login page` - Navigates to login page
- **When**: `I login with {username} and {password}` - Performs login action
- **Then**: `I should see a flash message saying {message}` - Validates result message

## Reporting

Test reports are generated in the `allure-results/` directory. To view detailed reports:

1. Install Allure globally:
   ```bash
   npm install -g allure-commandline
   ```

2. Generate and open report:
   ```bash
   allure generate allure-results --clean
   allure open allure-report
   ```

## Test URL

The tests run against: https://the-internet.herokuapp.com/login

## Troubleshooting

### Common Issues

1. **Chrome Driver Issues**: Ensure Chrome browser is installed and up to date
2. **Port Conflicts**: If tests fail to start, check if other processes are using the same ports
3. **Network Issues**: Ensure stable internet connection for accessing the test site

### Debug Mode

To run tests in debug mode with detailed logging:
```bash
npx wdio run wdio.conf.js --logLevel=debug
```

## Contributing

1. Follow the existing code structure
2. Add new page objects in the `pageobjects/` directory
3. Create feature files in the `features/` directory
4. Implement step definitions in `step-definitions/` directory
5. Ensure all tests pass before submitting changes

## License

This project is for educational and testing purposes.
