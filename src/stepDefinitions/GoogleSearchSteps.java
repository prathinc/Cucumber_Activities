package stepDefinitions;

import java.io.File;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GoogleSearchSteps {
	
	private WebDriver driver = null;
	private WebDriverWait wait = null;
	
	@Given("^User is on Google Home Page$")
	public void launchGoogle() {
		String driverPath = System.getProperty("user.dir")
				+ File.separator
				+ "drivers"
				+ File.separator
				+ "chromedriver.exe";
		
		System.setProperty("webdriver.chrome.driver", driverPath);
		driver = new ChromeDriver();
		wait = new WebDriverWait(driver, 60);
		driver.get("https://www.google.com/");
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("hplogo")));
	}

	@When("^User types in Cheese and hits ENTER$")
	public void googleSearch() {
	String searchString = "Cheese";
	WebElement searchBox = driver.findElement(By.xpath("//div/div[2]/input"));
	searchBox.sendKeys(searchString);
	searchBox.submit();
	
	}

	@Then("^Show how many search results were shown$")
	public void countResults() {
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.id("result-stats")));
        String resultStats = driver.findElement(By.id("result-stats")).getText();
        System.out.println("Number of results found: " + resultStats);
	}
	
	@And("^Close the browser$")
    public void closeTheBrowser() throws Throwable {
        driver.close();
	}

}
