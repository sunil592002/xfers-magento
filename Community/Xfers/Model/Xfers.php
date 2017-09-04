<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Community\Xfers\Model;



/**
 * Pay In Store payment method model
 */
class Xfers extends \Magento\Payment\Model\Method\AbstractMethod
{

    /**
     * Payment code
     *
     * @var string
     */
    protected $_code = 'xfers';

    /**
     * Availability option
     *
     * @var bool
     */
    protected $_isOffline = true;


  

}
