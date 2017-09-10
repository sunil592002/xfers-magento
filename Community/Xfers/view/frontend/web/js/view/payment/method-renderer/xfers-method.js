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
        'Magento_Checkout/js/model/checkout-data-resolver',
        'uiRegistry',
        'Magento_Checkout/js/checkout-data',
        'Magento_Customer/js/customer-data'
    ],
    function (Component, quote, customer, checkoutDataResolver, registry, checkoutData, customerData) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Community_Xfers/payment/xfers'
            },

            /**
             * Initialize view.
             *
             * @return {exports}
             */
            initialize: function () {
                var billingAddressCode,
                    billingAddressData,
                    defaultAddressData;

                this._super().initChildren();
                quote.billingAddress.subscribe(function (address) {
                    this.isPlaceOrderActionAllowed(address !== null);
                }, this);
                checkoutDataResolver.resolveBillingAddress();

                billingAddressCode = 'billingAddress' + this.getCode();
                registry.async('checkoutProvider')(function (checkoutProvider) {
                    defaultAddressData = checkoutProvider.get(billingAddressCode);

                    if (defaultAddressData === undefined) {
                        // Skip if payment does not have a billing address form
                        return;
                    }
                    billingAddressData = checkoutData.getBillingAddressFromData();

                    if (billingAddressData) {
                        checkoutProvider.set(
                            billingAddressCode,
                            $.extend(true, {}, defaultAddressData, billingAddressData)
                        );
                    }
                    checkoutProvider.on(billingAddressCode, function (providerBillingAddressData) {
                        checkoutData.setBillingAddressFromData(providerBillingAddressData);
                    }, billingAddressCode);
                });

                return this;
            },

            isCustomerLoggedIn: customer.isLoggedIn,

            /** Returns send check to info */
            getMailingAddress: function() {
                return window.checkoutConfig.payment.checkmo.mailingAddress;
            },

            getTelephone: function() {alert(customerData.get('customer')().telephone;);
                return quote.billingAddress.telephone;
            }

           
        });
    }
);
