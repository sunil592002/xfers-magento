/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*browser:true*/
/*global define*/
define(
    [
        'Magento_Checkout/js/view/payment/default',
        'Magento_Checkout/js/model/quote',
        'Magento_Customer/js/model/customer',

    ],
    function (Component, quote, customer) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Community_Xfers/payment/xfers'
            },
            isCustomerLoggedIn: customer.isLoggedIn,

            /** Returns send check to info */
            getMailingAddress: function() {
                return window.checkoutConfig.payment.checkmo.mailingAddress;
            },

           
        });
    }
);
