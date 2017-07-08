<?php

if (!defined('TYPO3_MODE')) {
    die('Access denied.');
}

call_user_func(function () {

    // Include TCEMAIN Config
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:typo3_woehlke_org/Configuration/TSConfig/Page/TCEMAIN.ts">'
    );

    // Include useful User Configs
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addUserTSConfig(
        '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:typo3_woehlke_org/Configuration/TSConfig/User/TSUserConfig.ts">'
    );

    unset($GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['ext/realurl/class.tx_realurl_autoconfgen.php']['extensionConfiguration']['news']);

    // Register the RealUrl Autoconfig Hook
    if (! isset ($confArr ['enableRealURLAutoConfiguration']) || $confArr ['enableRealURLAutoConfiguration']) {
        $GLOBALS ['TYPO3_CONF_VARS'] ['SC_OPTIONS'] ['ext/realurl/class.tx_realurl_autoconfgen.php'] ['extensionConfiguration'] ['typo3_woehlke_org'] = 'ThomasWoehlke\\WoehlkeOrg\\Hooks\\RealUrl->addRealURLConfig';
    }

});






