<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Community\Xfers\Model;

//use Psr\Log\LoggerInterface as Logger;

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

    /**
     * Bank Transfer payment block paths
     *
     * @var string
     */
   // protected $_formBlockType = 'Magento\OfflinePayments\Block\Form\Banktransfer';

    /**
     * Instructions block path
     *
     * @var string
     */
   // protected $_infoBlockType = 'Magento\Payment\Block\Info\Instructions';
    

    public function __construct(
        \Magento\Framework\Model\Context $context,
        \Magento\Framework\Registry $registry,
        \Magento\Framework\Api\ExtensionAttributesFactory $extensionFactory,
        \Magento\Framework\Api\AttributeValueFactory $customAttributeFactory,
        \Magento\Payment\Helper\Data $paymentData,
        \Magento\Framework\App\Config\ScopeConfigInterface $scopeConfig,
        \Magento\Payment\Model\Method\Logger $logger,
        \Magento\Framework\Model\ResourceModel\AbstractResource $resource = null,
        \Magento\Framework\Data\Collection\AbstractDb $resourceCollection = null,
        array $data = []
    ) {
        parent::__construct(
            $context,
            $registry,
            $extensionFactory,
            $customAttributeFactory,
            $paymentData,
            $scopeConfig,
            $logger,
            $resource,
            $resourceCollection,
            $data
        );

        //$log = $context->getLogger();

        //$log->debug( 'Xfers Key: ', $this->getConfigData( 'api_key' ) );
        //$log->debug( 'Xfers URL: ', $this->getConfigData( 'api_url' ) );
        //$log->debug( 'Xfers Secret: ', $this->getConfigData( 'api_secret' ) );

        //$api_key = ;
    }

    /**
     * Get instructions text from config
     *
     * @return string
     */
    public function getInstructions()
    {
        return trim($this->getConfigData('instructions'));
    }


  

}
