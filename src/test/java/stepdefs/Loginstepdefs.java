package stepdefs;

import org.openqa.selenium.WebDriver;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class Loginstepdefs {
	
	WebDriver driver = Baseclass.driver;
	
	@Given("^User navigated to Swag Lab login page$")
    public void user_navigated_to_swag_lab_login_page() throws Throwable {
        
		//WebDriver driver1 = new FirefoxDriver();
		driver.get("https://www.saucedemo.com/");
		//driver1.get("https://www.simplilearn.com/");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
				
		WebDriverWait wait = new WebDriverWait(driver,30);
		
    }

    @When("^User enters username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void user_enters_username_something_and_password_something(String username, String password) throws Throwable {
        
    	WebElement usrname = driver.findElement(By.id("user-name"));
    	usrname.sendKeys(username);
    	
    	WebElement paswd = driver.findElement(By.id("password"));
    	paswd.sendKeys(password);
    	
    }

    @Then("^User should be navigated on the product page$")
    public void user_should_be_navigated_on_the_product_page() throws Throwable {
        
    	
    	
    }

    @Then("^User should be getting error \"([^\"]*)\"$")
    public void user_should_be_getting_error_something(String error) throws Throwable {
        
    	WebElement er = driver.findElement(By.xpath("//h3[contains(text(),'Epic sadface: Username and password do not match any user in this service')]"));
        Assert.assertEquals(error, er.getText());
    	
    }

    @And("^User clicks on the Login Button$")
    public void user_clicks_on_the_login_button() throws Throwable {
        
    	WebElement login_btn = driver.findElement(By.name("login-button"));
    	login_btn.click();
    	
    }
}
