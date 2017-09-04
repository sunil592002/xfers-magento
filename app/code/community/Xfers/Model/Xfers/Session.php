<?php


class Xfers_Model_Xfers_Session extends \Magento\Framework\Session\Generic
{
    public function __construct()
    {
        $this->init('xfers');
    }
}
