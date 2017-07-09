<?php
/**
 * Created by PhpStorm.
 * User: tw
 * Date: 08.04.17
 * Time: 11:17
 */

defined('TYPO3_MODE') or die();
call_user_func(
    function () {

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('typo3_woehlke_org', 'Configuration/TypoScript',
            'Thomas Wöhlke'
        );
/*
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('typo3_woehlke_org', 'Configuration/TypoScript/news/rssfeed',
            'Thomas Wöhlke Blog RSS Feed'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('typo3_woehlke_org', 'Configuration/TypoScript/news/ical',
            'Thomas Wöhlke Blog iCal'
        );
*/

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('typo3_woehlke_org', 'Configuration/TypoScript/host/local',
            'Thomas Wöhlke Localhost'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('typo3_woehlke_org', 'Configuration/TypoScript/host/test',
            'Thomas Wöhlke Test'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('typo3_woehlke_org', 'Configuration/TypoScript/host/stage',
            'Thomas Wöhlke Stage'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('typo3_woehlke_org', 'Configuration/TypoScript/host/live',
            'Thomas Wöhlke Live'
        );

    }
);
