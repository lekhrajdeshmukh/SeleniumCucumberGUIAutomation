$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("freeShipping.feature");
formatter.feature({
  "line": 2,
  "name": "As a Customer I order product with price more than of 20 euro Then I expect free shipping for the product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@freeShipping"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer search for a product \"\u003cproduct-name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "customer update the product quantity to \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "customer verify shipping cost as \"\u003cfreeShipping\u003e\" on cart page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verify total \"\u003cprice\u003e\" on cart page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;",
  "rows": [
    {
      "cells": [
        "product-name",
        "quantity",
        "price",
        "freeShipping"
      ],
      "line": 16,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;1"
    },
    {
      "cells": [
        "freeShipping.searchEditBox.productName-1",
        "freeShipping.selectQuantity.productQuantity-1",
        "freeShipping.totalProductPrice.expectedPrice-1",
        "freeShipping.shippingCostValue.shippingCost-1"
      ],
      "line": 17,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;2"
    },
    {
      "cells": [
        "freeShipping.searchEditBox.productName-5",
        "freeShipping.selectQuantity.productQuantity-5",
        "freeShipping.totalProductPrice.expectedPrice-5",
        "freeShipping.shippingCostValue.shippingCost-5"
      ],
      "line": 18,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;3"
    },
    {
      "cells": [
        "freeShipping.searchEditBox.productName-2",
        "freeShipping.selectQuantity.productQuantity-2",
        "freeShipping.totalProductPrice.expectedPrice-2",
        "freeShipping.shippingCostValue.shippingCost-2"
      ],
      "line": 19,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;4"
    },
    {
      "cells": [
        "freeShipping.searchEditBox.productName-3",
        "freeShipping.selectQuantity.productQuantity-3",
        "freeShipping.totalProductPrice.expectedPrice-3",
        "freeShipping.shippingCostValue.shippingCost-3"
      ],
      "line": 20,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;5"
    },
    {
      "cells": [
        "freeShipping.searchEditBox.productName-4",
        "freeShipping.selectQuantity.productQuantity-4",
        "freeShipping.totalProductPrice.expectedPrice-4",
        "freeShipping.shippingCostValue.shippingCost-4"
      ],
      "line": 21,
      "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@freeShipping"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer search for a product \"freeShipping.searchEditBox.productName-1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "customer update the product quantity to \"freeShipping.selectQuantity.productQuantity-1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "customer verify shipping cost as \"freeShipping.shippingCostValue.shippingCost-1\" on cart page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verify total \"freeShipping.totalProductPrice.expectedPrice-1\" on cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FreeShippingSteps.customer_is_on_bol_com_page()"
});
formatter.result({
  "duration": 11523194300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locale-language",
      "offset": 29
    }
  ],
  "location": "FreeShippingSteps.customer_verify_language_as(String)"
});
formatter.result({
  "duration": 2151614600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.searchEditBox.productName-1",
      "offset": 31
    }
  ],
  "location": "FreeShippingSteps.customer_search_for_a_product(String)"
});
formatter.result({
  "duration": 409357000,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_a_search_button()"
});
formatter.result({
  "duration": 682146200,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 258207200,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_continueOrder_button()"
});
formatter.result({
  "duration": 801751200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.selectQuantity.productQuantity-1",
      "offset": 41
    }
  ],
  "location": "FreeShippingSteps.customer_update_the_product_quantity_to(String)"
});
formatter.result({
  "duration": 169739200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.shippingCostValue.shippingCost-1",
      "offset": 34
    }
  ],
  "location": "FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(String)"
});
formatter.result({
  "duration": 60574400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.totalProductPrice.expectedPrice-1",
      "offset": 19
    }
  ],
  "location": "FreeShippingSteps.user_verify_total_on_cart_page(String)"
});
formatter.result({
  "duration": 48306800,
  "error_message": "java.lang.AssertionError: expected [20,95] but found [40,95]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.lat.test.steps.pages.FreeShippingPages.verifyTotalPtoductPrice(FreeShippingPages.java:205)\r\n\tat com.lat.test.steps.gui.FreeShippingSteps.user_verify_total_on_cart_page(FreeShippingSteps.java:73)\r\n\tat ✽.And User verify total \"freeShipping.totalProductPrice.expectedPrice-1\" on cart page(freeShipping.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FreeShippingSteps.user_remove_the_product_from_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("https://www.bol.com/nl/order/basket.html");
formatter.after({
  "duration": 1182584800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@freeShipping"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer search for a product \"freeShipping.searchEditBox.productName-5\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "customer update the product quantity to \"freeShipping.selectQuantity.productQuantity-5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "customer verify shipping cost as \"freeShipping.shippingCostValue.shippingCost-5\" on cart page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verify total \"freeShipping.totalProductPrice.expectedPrice-5\" on cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FreeShippingSteps.customer_is_on_bol_com_page()"
});
formatter.result({
  "duration": 345409300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locale-language",
      "offset": 29
    }
  ],
  "location": "FreeShippingSteps.customer_verify_language_as(String)"
});
formatter.result({
  "duration": 2199731100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.searchEditBox.productName-5",
      "offset": 31
    }
  ],
  "location": "FreeShippingSteps.customer_search_for_a_product(String)"
});
formatter.result({
  "duration": 352668000,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_a_search_button()"
});
formatter.result({
  "duration": 595803200,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 333600600,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_continueOrder_button()"
});
formatter.result({
  "duration": 3763414000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.selectQuantity.productQuantity-5",
      "offset": 41
    }
  ],
  "location": "FreeShippingSteps.customer_update_the_product_quantity_to(String)"
});
formatter.result({
  "duration": 179444100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.shippingCostValue.shippingCost-5",
      "offset": 34
    }
  ],
  "location": "FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(String)"
});
formatter.result({
  "duration": 46663600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.totalProductPrice.expectedPrice-5",
      "offset": 19
    }
  ],
  "location": "FreeShippingSteps.user_verify_total_on_cart_page(String)"
});
formatter.result({
  "duration": 55778700,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.user_remove_the_product_from_the_cart()"
});
formatter.result({
  "duration": 335194400,
  "status": "passed"
});
formatter.after({
  "duration": 81400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@freeShipping"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer search for a product \"freeShipping.searchEditBox.productName-2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "customer update the product quantity to \"freeShipping.selectQuantity.productQuantity-2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "customer verify shipping cost as \"freeShipping.shippingCostValue.shippingCost-2\" on cart page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verify total \"freeShipping.totalProductPrice.expectedPrice-2\" on cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FreeShippingSteps.customer_is_on_bol_com_page()"
});
formatter.result({
  "duration": 245430200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locale-language",
      "offset": 29
    }
  ],
  "location": "FreeShippingSteps.customer_verify_language_as(String)"
});
formatter.result({
  "duration": 2211816800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.searchEditBox.productName-2",
      "offset": 31
    }
  ],
  "location": "FreeShippingSteps.customer_search_for_a_product(String)"
});
formatter.result({
  "duration": 214248700,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_a_search_button()"
});
formatter.result({
  "duration": 515561700,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 468297000,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_continueOrder_button()"
});
formatter.result({
  "duration": 713459500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.selectQuantity.productQuantity-2",
      "offset": 41
    }
  ],
  "location": "FreeShippingSteps.customer_update_the_product_quantity_to(String)"
});
formatter.result({
  "duration": 148437500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.shippingCostValue.shippingCost-2",
      "offset": 34
    }
  ],
  "location": "FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(String)"
});
formatter.result({
  "duration": 43264700,
  "error_message": "java.lang.AssertionError: expected [NoGratis] but found [Gratis]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.lat.test.steps.pages.FreeShippingPages.verifyShippingCost(FreeShippingPages.java:184)\r\n\tat com.lat.test.steps.gui.FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(FreeShippingSteps.java:67)\r\n\tat ✽.Then customer verify shipping cost as \"freeShipping.shippingCostValue.shippingCost-2\" on cart page(freeShipping.feature:12)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.totalProductPrice.expectedPrice-2",
      "offset": 19
    }
  ],
  "location": "FreeShippingSteps.user_verify_total_on_cart_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeShippingSteps.user_remove_the_product_from_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("https://www.bol.com/nl/order/basket.html");
formatter.after({
  "duration": 1340361400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@freeShipping"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer search for a product \"freeShipping.searchEditBox.productName-3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "customer update the product quantity to \"freeShipping.selectQuantity.productQuantity-3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "customer verify shipping cost as \"freeShipping.shippingCostValue.shippingCost-3\" on cart page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verify total \"freeShipping.totalProductPrice.expectedPrice-3\" on cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FreeShippingSteps.customer_is_on_bol_com_page()"
});
formatter.result({
  "duration": 243212500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locale-language",
      "offset": 29
    }
  ],
  "location": "FreeShippingSteps.customer_verify_language_as(String)"
});
formatter.result({
  "duration": 2197465900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.searchEditBox.productName-3",
      "offset": 31
    }
  ],
  "location": "FreeShippingSteps.customer_search_for_a_product(String)"
});
formatter.result({
  "duration": 399320100,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_a_search_button()"
});
formatter.result({
  "duration": 1846326300,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 298937200,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_continueOrder_button()"
});
formatter.result({
  "duration": 10355295100,
  "error_message": "java.lang.AssertionError: Failed to locate element: [ By.cssSelector: div.js_close_modal_window.modal__window--close-hitarea ] expected [false] but found [true]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertFalse(Assert.java:63)\r\n\tat com.lat.test.steps.pages.FreeShippingPages.clickOnContinueOrderBtn(FreeShippingPages.java:170)\r\n\tat com.lat.test.steps.gui.FreeShippingSteps.customer_click_on_continueOrder_button(FreeShippingSteps.java:55)\r\n\tat ✽.When customer click on continueOrder button(freeShipping.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.selectQuantity.productQuantity-3",
      "offset": 41
    }
  ],
  "location": "FreeShippingSteps.customer_update_the_product_quantity_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.shippingCostValue.shippingCost-3",
      "offset": 34
    }
  ],
  "location": "FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.totalProductPrice.expectedPrice-3",
      "offset": 19
    }
  ],
  "location": "FreeShippingSteps.user_verify_total_on_cart_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FreeShippingSteps.user_remove_the_product_from_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("https://www.bol.com/nl/s/algemeen/zoekresultaten/Ntt/Tablet2you%2B-%2BLaptop%2Bsleeve%2B-%2Bhoes%2B-%2BMacbook%2BPro%2B15.4%2B-%2BDenim%2B-%2BZwart/N/0/Nty/1/search/true/searchType/qck/defaultSearchContext/media_all/sc/media_all/index.html");
formatter.after({
  "duration": 11071434900,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify shipping charges is free or not for the orderable product",
  "description": "",
  "id": "as-a-customer-i-order-product-with-price-more-than-of-20-euro-then-i-expect-free-shipping-for-the-product;verify-shipping-charges-is-free-or-not-for-the-orderable-product;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@freeShipping"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "customer is on bol.com page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "customer verify language as \"locale-language\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "customer search for a product \"freeShipping.searchEditBox.productName-4\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "customer click on a search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "customer click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "customer click on continueOrder button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "customer update the product quantity to \"freeShipping.selectQuantity.productQuantity-4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "customer verify shipping cost as \"freeShipping.shippingCostValue.shippingCost-4\" on cart page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User verify total \"freeShipping.totalProductPrice.expectedPrice-4\" on cart page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User remove the product from the cart",
  "keyword": "And "
});
formatter.match({
  "location": "FreeShippingSteps.customer_is_on_bol_com_page()"
});
formatter.result({
  "duration": 256708700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "locale-language",
      "offset": 29
    }
  ],
  "location": "FreeShippingSteps.customer_verify_language_as(String)"
});
formatter.result({
  "duration": 2267325200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.searchEditBox.productName-4",
      "offset": 31
    }
  ],
  "location": "FreeShippingSteps.customer_search_for_a_product(String)"
});
formatter.result({
  "duration": 315688900,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_a_search_button()"
});
formatter.result({
  "duration": 1215701800,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_add_to_cart_button()"
});
formatter.result({
  "duration": 300015300,
  "status": "passed"
});
formatter.match({
  "location": "FreeShippingSteps.customer_click_on_continueOrder_button()"
});
formatter.result({
  "duration": 445161600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.selectQuantity.productQuantity-4",
      "offset": 41
    }
  ],
  "location": "FreeShippingSteps.customer_update_the_product_quantity_to(String)"
});
formatter.result({
  "duration": 116256600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.shippingCostValue.shippingCost-4",
      "offset": 34
    }
  ],
  "location": "FreeShippingSteps.customer_verify_shipping_cost_as_on_cart_page(String)"
});
formatter.result({
  "duration": 51725900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "freeShipping.totalProductPrice.expectedPrice-4",
      "offset": 19
    }
  ],
  "location": "FreeShippingSteps.user_verify_total_on_cart_page(String)"
});
formatter.result({
  "duration": 47581400,
  "error_message": "java.lang.AssertionError: expected [20,00] but found [24,99]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:135)\r\n\tat org.testng.Assert.assertEquals(Assert.java:116)\r\n\tat org.testng.Assert.assertEquals(Assert.java:190)\r\n\tat org.testng.Assert.assertEquals(Assert.java:200)\r\n\tat com.lat.test.steps.pages.FreeShippingPages.verifyTotalPtoductPrice(FreeShippingPages.java:205)\r\n\tat com.lat.test.steps.gui.FreeShippingSteps.user_verify_total_on_cart_page(FreeShippingSteps.java:73)\r\n\tat ✽.And User verify total \"freeShipping.totalProductPrice.expectedPrice-4\" on cart page(freeShipping.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FreeShippingSteps.user_remove_the_product_from_the_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("https://www.bol.com/nl/order/basket.html");
formatter.after({
  "duration": 1128655100,
  "status": "passed"
});
});