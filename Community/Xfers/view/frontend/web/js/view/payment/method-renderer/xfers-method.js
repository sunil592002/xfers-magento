/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*browser:true*/
/*global define*/
define(
    [
        'Magento_Checkout/js/model/quote',
        'Magento_Checkout/js/view/payment/default'
    ],
    function (quote, Component) {
        'use strict';
        alert(quote.billingAddress);
        return Component.extend({
            defaults: {
                template: 'Community_Xfers/payment/xfers'
            },
            currentBillingAddress: quote.billingAddress,

            /**
             * Init component
             */
            initialize: function () {
                this._super();
                quote.paymentMethod.subscribe(function () {
                    checkoutDataResolver.resolveBillingAddress();
                }, this);
            },


            /** Returns send check to info */
            getMailingAddress: function() {
                return window.checkoutConfig.payment.checkmo.mailingAddress;
            },

           
        });
    }
);
