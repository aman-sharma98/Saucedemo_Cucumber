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

public class Productstepdefs {

	WebDriver driver = Baseclass.driver;

	@And("^user adds the product to the cart \"([^\"]*)\"$")
    public void user_adds_the_product_to_the_cart_something(String product) throws Throwable {
        
		WebElement product_add = driver.findElement(By.name("add-to-cart-sauce-labs-bike-light"));
    	product_add.click();
		
    }

    
    @Then("^user can see the product added to the cart$")
    public void user_can_see_the_product_added_to_the_cart() throws Throwable {
        
    	WebElement cart = driver.findElement(By.id("shopping_cart_container"));
    	Assert.assertEquals("1", cart.getText());
    	
    }
	
}
