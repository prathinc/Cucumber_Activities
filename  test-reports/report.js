$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity1_2.feature");
formatter.feature({
  "line": 3,
  "name": "Login Test",
  "description": "I want to use this template for my feature file",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@activity1_2"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Testing Login",
  "description": "",
  "id": "login-test;testing-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters username and password",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.launchWebsite()"
});
formatter.result({
  "duration": 6791263400,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.userLogin()"
});
formatter.result({
  "duration": 446450700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.successLogin()"
});
formatter.result({
  "duration": 95158000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 167146900,
  "status": "passed"
});
formatter.uri("Activity1_3.feature");
formatter.feature({
  "line": 3,
  "name": "Testing with Tags",
  "description": "I want to use this template for my feature file",
  "id": "testing-with-tags",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@activity1_3"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Testing with Simple Alert",
  "description": "",
  "id": "testing-with-tags;testing-with-simple-alert",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@SimpleAlert"
    },
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on the page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User clicks the Simple Alert button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Alert opens",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Read the text from it and print it",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Close the alert",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "Alerts.launchAlertsPage()"
});
formatter.result({
  "duration": 4584617700,
  "status": "passed"
});
formatter.match({
  "location": "Alerts.clickSimpleAlert()"
});
formatter.result({
  "duration": 133345000,
  "status": "passed"
});
formatter.match({
  "location": "Alerts.switchToAlert()"
});
formatter.result({
  "duration": 9387500,
  "status": "passed"
});
formatter.match({
  "location": "Alerts.readAlertText()"
});
formatter.result({
  "duration": 5127300,
  "status": "passed"
});
formatter.match({
  "location": "Alerts.closeAlert()"
});
formatter.result({
  "duration": 21678800,
  "status": "passed"
});
formatter.match({
  "location": "Alerts.closeBrowser()"
});
formatter.result({
  "duration": 205404500,
  "status": "passed"
});
formatter.uri("Activity2_4.feature");
formatter.feature({
  "line": 3,
  "name": "Login Test",
  "description": "I want to use this template for my feature file",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@activity2_4"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Testing Login without Examples",
  "description": "",
  "id": "login-test;testing-login-without-examples",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters \"admin\" and \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.launchWebsite()"
});
formatter.result({
  "duration": 4905339700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "LoginTestSteps.userLoginWithParameters(String,String)"
});
formatter.result({
  "duration": 505473500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.successLogin()"
});
formatter.result({
  "duration": 100425700,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 323363100,
  "status": "passed"
});
formatter.uri("Activity2_5.feature");
formatter.feature({
  "line": 3,
  "name": "Login Test",
  "description": "I want to use this template for my feature file",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@activity2_5"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Testing Login with Example",
  "description": "",
  "id": "login-test;testing-login-with-example",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters \"\u003cUsernames\u003e\" and \"\u003cPasswords\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-test;testing-login-with-example;",
  "rows": [
    {
      "cells": [
        "Usernames",
        "Passwords"
      ],
      "line": 14,
      "id": "login-test;testing-login-with-example;;1"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 15,
      "id": "login-test;testing-login-with-example;;2"
    },
    {
      "cells": [
        "adminUser",
        "Password"
      ],
      "line": 16,
      "id": "login-test;testing-login-with-example;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Testing Login with Example",
  "description": "",
  "id": "login-test;testing-login-with-example;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@activity2_5"
    },
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters \"admin\" and \"password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.launchWebsite()"
});
formatter.result({
  "duration": 4686658000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "password",
      "offset": 25
    }
  ],
  "location": "LoginTestSteps.userLoginWithParameters(String,String)"
});
formatter.result({
  "duration": 427614100,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.successLogin()"
});
formatter.result({
  "duration": 89772000,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 251115000,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Testing Login with Example",
  "description": "",
  "id": "login-test;testing-login-with-example;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@activity2_5"
    },
    {
      "line": 6,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enters \"adminUser\" and \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Read the page title and confirmation message",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the Browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTestSteps.launchWebsite()"
});
formatter.result({
  "duration": 4909273800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adminUser",
      "offset": 13
    },
    {
      "val": "Password",
      "offset": 29
    }
  ],
  "location": "LoginTestSteps.userLoginWithParameters(String,String)"
});
formatter.result({
  "duration": 421570500,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.successLogin()"
});
formatter.result({
  "duration": 98056800,
  "status": "passed"
});
formatter.match({
  "location": "LoginTestSteps.closeBrowser()"
});
formatter.result({
  "duration": 186858100,
  "status": "passed"
});
});