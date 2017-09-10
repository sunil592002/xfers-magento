/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
/*browser:true*/
/*global define*/
define(
    [
        'Magento_Checkout/js/view/payment/default'
    ],
    function (Component) {
        'use strict';

        return Component.extend({
            defaults: {
                template: 'Community_Xfers/payment/xfers'
            },

            /** Returns send check to info */
            getMailingAddress: function() {alert(window.checkoutConfig.payment.checkmo.mailingAddress);
                alert(window.checkoutConfig.payment.checkmo.telephone);
                return window.checkoutConfig.payment.checkmo.mailingAddress;
            },

           
        });
    }
);
