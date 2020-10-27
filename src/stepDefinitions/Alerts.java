package stepDefinitions;

import java.io.File;

import org.openqa.selenium.Alert;
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

public class Alerts {
	
	private WebDriver driver = null;
	private WebDriverWait wait = null;
	private Alert alert = null;
	
	@Given("^User is on the page$")
	public void launchAlertsPage() {
		String driverPath = System.getProperty("user.dir")
				+ File.separator
				+ "drivers"
				+ File.separator
				+ "chromedriver.exe";
		
		System.setProperty("webdriver.chrome.driver", driverPath);
		driver = new ChromeDriver();
		wait = new WebDriverWait(driver, 60);
		driver.get("https://www.training-support.net/selenium/javascript-alerts");
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button/i")));
	}
	@When("^User clicks the Simple Alert button$")
	public void clickSimpleAlert() {
	driver.findElement(By.cssSelector("#simple")).click();
	}
	
	@When("^User clicks the Confirm Alert button$")
	public void clickConfirmAlert() {
	driver.findElement(By.cssSelector("#confirm")).click();
	}
	
	@When("^User clicks the Prompt Alert button$")
	public void clickPromptAlert() {
	driver.findElement(By.cssSelector("#prompt")).click();
	}
	
	@Then("^Alert opens$")
	public void switchToAlert() {
		alert = driver.switchTo().alert();
	}
	
	@And("^Read the text from it and print it$") 
	public void readAlertText() {
		System.out.println("Alert Text :"+alert.getText());
	}
	
	@And("^Write a custom message in it$")
    public void writeToPrompt() {
        alert.sendKeys("Custom Message");
    }
	
	@And("^Close the alert$") 
	public void closeAlert() {
		alert.accept();
	}
	
	@And("^Close the alert with Cancel$")
    public void closeAlertWithCAncel() {
        alert.dismiss();
    }
	
	@And("^close Browser$")
    public void closeBrowser() {
        driver.close();
    }
	
}
