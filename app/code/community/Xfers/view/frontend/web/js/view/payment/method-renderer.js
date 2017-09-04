define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'Xfers',
                component: 'community_Xfers/js/view/payment/method-renderer/xfers'
            }
        );
        return Component.extend({});
    }
);