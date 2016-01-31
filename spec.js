/**
 * Created by ChaithraRao on 1/30/16.
 */
'use strict';

describe('Testing Business Insider Webpage', function() {
    var searchIcon = element(by.css('.svg.sprites.search-icon'));
    var closeSearchIcon = element(by.css('.close-x'));
    var searchInputField = element(by.xpath('/html/body/div[3]/div[2]/div/form/input'));
    var searchResults = element(by.css('.search-result'));

    beforeEach(function () {
        //Load the url in the browser
        browser.get('http://www.businessinsider.com/');
    });

    afterAll(function(){
        //Close browser after all tests are executed
        browser.driver.close();
    });

    it('Page should contain search icon', function (){
        expect(searchIcon.isDisplayed()).toBeTruthy();
    });

    it('User should be able to close the search window', function(){
        searchIcon.click().then(function(){
            closeSearchIcon.click();
            //When the icon to close search is clicked, search window
            //should not be displayed. Search icon should be displayed.
            expect(searchInputField.isDisplayed()).toBeFalsy();
            expect(searchIcon.isDisplayed()).toBeTruthy();
        });
    });

    it('User should be able to search using the search box', function(){
        searchIcon.click();
        searchInputField.sendKeys('New York');
        var enter = browser.actions().sendKeys(protractor.Key.ENTER);
        enter.perform();
        browser.wait(function () {
            return searchInputField;
        }, 2000);
        //The search results should not be empty
        expect(searchResults.length>0);
    });
});


