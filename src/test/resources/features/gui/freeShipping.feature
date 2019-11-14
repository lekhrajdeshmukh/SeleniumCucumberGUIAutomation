@freeShipping
Feature: As a Customer I order product with price more than of 20 euro Then I expect free shipping for the product

Scenario Outline: Verify shipping charges is free or not for the orderable product
Given customer is on bol.com page
And customer verify language as "locale-language"
And customer search for a product "<product-name>"
And customer click on a search button
And customer click on add to cart button
When customer click on continueOrder button
And customer update the product quantity to "<quantity>"
Then customer verify shipping cost as "<freeShipping>" on cart page
And User verify total "<price>" on cart page
And User remove the product from the cart 
Examples:
|	product-name									|	quantity										|		price										|	freeShipping									|
|	freeShipping.searchEditBox.productName-1		|	freeShipping.selectQuantity.productQuantity-1	|	freeShipping.totalProductPrice.expectedPrice-1	|	freeShipping.shippingCostValue.shippingCost-1	|
|	freeShipping.searchEditBox.productName-5		|	freeShipping.selectQuantity.productQuantity-5	|	freeShipping.totalProductPrice.expectedPrice-5	|	freeShipping.shippingCostValue.shippingCost-5	|
|	freeShipping.searchEditBox.productName-2		|	freeShipping.selectQuantity.productQuantity-2	|	freeShipping.totalProductPrice.expectedPrice-2	|	freeShipping.shippingCostValue.shippingCost-2	|
|	freeShipping.searchEditBox.productName-3		|	freeShipping.selectQuantity.productQuantity-3	|	freeShipping.totalProductPrice.expectedPrice-3	|	freeShipping.shippingCostValue.shippingCost-3	|
|	freeShipping.searchEditBox.productName-4		|	freeShipping.selectQuantity.productQuantity-4	|	freeShipping.totalProductPrice.expectedPrice-4	|	freeShipping.shippingCostValue.shippingCost-4	|