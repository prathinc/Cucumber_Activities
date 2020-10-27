package stepDefinitions;

import java.io.File;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginTestSteps {
	private WebDriver driver = null;
	private WebDriverWait wait = null;
	
	@Given("^User is on Login page$")
	public void launchWebsite() {
		String driverPath = System.getProperty("user.dir")
				+ File.separator
				+ "drivers"
				+ File.separator
				+ "chromedriver.exe";
		
		System.setProperty("webdriver.chrome.driver", driverPath);
		driver = new ChromeDriver();
		wait = new WebDriverWait(driver, 60);
		driver.get("https://www.training-support.net/selenium/login-form");
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[@type='submit']")));
	}

	@When("^User enters username and password$")
	public void userLogin() throws InterruptedException {
	String username = "admin", password = "password";
	driver.findElement(By.id("username")).sendKeys(username);
	driver.findElement(By.id("password")).sendKeys(password);
	driver.findElement(By.xpath("//button[@type='submit']")).click();
	
	}
	
	@When("^User enters \"(.*)\" and \"(.*)\"$")
	public void userLoginWithParameters(String username, String password) throws InterruptedException {
	//String username = "admin", password = "password";
	driver.findElement(By.id("username")).sendKeys(username);
	driver.findElement(By.id("password")).sendKeys(password);
	driver.findElement(By.xpath("//button[@type='submit']")).click();
	
	}

	@Then("^Read the page title and confirmation message$")
	public void successLogin() throws InterruptedException {
		wait.until(ExpectedConditions.presenceOfElementLocated(By.id("action-confirmation")));
		System.out.println("Page title :"+driver.getTitle());
		System.out.println("Confirmation message :"+driver.findElement(By.id("action-confirmation")).getText());
	}
	
	@And("^Close the Browser$")
    public void closeBrowser() throws Throwable {
        driver.close();
	}



}
