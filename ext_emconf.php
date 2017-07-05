<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "oekumene_tiergarten".
 * Auto generated 22-03-2017 06:43
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
    'title' => 'Thomas Wöhlke',
    'description' => 'Site Packge for www.woehlke.org',
    'category' => 'templates',
    'version' => '0.0.1',
    'state' => 'stable',
    'uploadfolder' => true,
    'createDirs' => 'uploads/tx_typo3_woehlke_org',
    'clearcacheonload' => true,
    'author' => 'Thomas Woehlke',
    'author_email' => 'thomas@woehlke.org',
    'author_company' => 'Thomas Wöhlke',
    'constraints' => array(
        'depends' => array(
            'typo3' => '8.7.3-8.7.99',
            'php' => '7.0.0-7.0.999',
            /* System-Extensions: */
            'info' => '8.7.3-8.7.99',
            'fluid' => '8.7.3-8.7.99',
            'extbase' => '8.7.3-8.7.99',
            'scheduler' => '8.7.3-8.7.99',
            'indexed_search' => '8.7.3-8.7.99',
            'fluid_styled_content' => '8.7.3-8.7.99',
            /* TER-Extensions: */
        ),
        'conflicts' => array(
            'fluidpages' => '0.0.0-99.99.99',
            'cooluri' => '0.0.0-99.99.99',
            'simulatestatic' => '0.0.0-99.99.99',
        ),
        'suggests' => array(
            /* wegen news */
            'dd_googlesitemap' => '2.0.5-2.99.99',
        ),
    ),
    'autoload' => array(
        'psr-4' => array(
            'ThomasWoehlke\\OekumeneTiergarten\\' => 'Classes',
        ),
    ),
);

