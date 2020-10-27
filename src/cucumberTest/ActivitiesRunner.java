package cucumberTest;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "Features",
		glue = {"stepDefinitions"},
		tags = {"@smokeTest"},
		strict = true,
		plugin = {"json: test-reports/json-report.json"},
		monochrome = true
		)
public class ActivitiesRunner {

//Empty class
}
