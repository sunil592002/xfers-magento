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

    public function __construct(
        \Magento\Framework\Model\Context $context,
        \Magento\Framework\Registry $registry,
        \Magento\Framework\Api\ExtensionAttributesFactory $extensionFactory,
        \Magento\Framework\Api\AttributeValueFactory $customAttributeFactory,
        \Magento\Payment\Helper\Data $paymentData,
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig,
        \Magento\Payment\Model\Method\Logger $logger,
        \Magento\Framework\Module\ModuleListInterface $moduleList,
        \Magento\Framework\Stdlib\DateTime\TimezoneInterface $localeDate,
        \Magento\Directory\Model\CountryFactory $countryFactory,
        array $data = array()
    ) {
        parent::__construct(
            $context,
            $registry,
            $extensionFactory,
            $customAttributeFactory,
            $paymentData,
            $scopeConfig,
            $logger,
            $moduleList,
            $localeDate,
            null,
            null,
            $data
        );
        
        echo $this->getConfigData('api_key');exit;
    }
  

}
