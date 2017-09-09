/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/view/payment/default'
        'Magento_Customer/js/model/customer',
    ],
    function (Component, payment, customer) {
        'use strict';
        return Component.extend({
            defaults: {
                template: 'Community_Xfers/payment/xfers'
            },
            isCustomerLoggedIn: customer.isLoggedIn,

            /** Returns payment method instructions */
            getInstructions: function() {
                return window.checkoutConfig.payment.instructions[this.item.method];
            }
        });
    }
);