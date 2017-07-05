page {
	includeCSS {
		cssFileGoogleFontTitilliumWeb = https://fonts.googleapis.com/css?family=Titillium+Web
		cssFileMapIcons = EXT:typo3_woehlke_org/Resources/Public/Contrib/map-icons/css/map-icons.min.css
		mmenu1 = EXT:typo3_woehlke_org/Resources/Public/Contrib/mmenu/css/jquery.mmenu.all.css
		mmenu2 = EXT:typo3_woehlke_org/Resources/Public/Contrib/mmenu/wrappers/bootstrap/jquery.mmenu.bootstrap.css
		cssFileMyOwn = EXT:typo3_woehlke_org/Resources/Public/css/my.css
	}
	includeJSFooter {
		jsFileMapIcons = EXT:typo3_woehlke_org/Resources/Public/Contrib/map-icons/js/map-icons.min.js
		mmenu1 = EXT:typo3_woehlke_org/Resources/Public/Contrib/mmenu/js/jquery.mmenu.all.min.js
		mmenu2 = EXT:typo3_woehlke_org/Resources/Public/Contrib/mmenu/wrappers/bootstrap/jquery.mmenu.bootstrap.min.js
		jsFileMyOwn = EXT:typo3_woehlke_org/Resources/Public/js/my.js
	}
	10 {
		templateRootPaths {
			310 = {$plugin.tx_typo3_woehlke_org.view.templateRootPath}
			305 = EXT:typo3_woehlke_org/Resources/Private/Templates/
		}
		partialRootPaths {
			310 = {$plugin.tx_typo3_woehlke_org.view.partialRootPath}
			300 = EXT:typo3_woehlke_org/Resources/Private/Partials/
		}
		layoutRootPaths {
			310 = {$plugin.tx_typo3_woehlke_org.view.layoutRootPath}
			300 = EXT:typo3_woehlke_org/Resources/Private/Layouts/
		}
	}
}

page.config {
	headerComment (
--------------------------------------------------
|                                                |
|  TYPO3 Website - Development by                |
|                                                |
|  Thomas Woehlke | 2017 | www.woehlke.org       |
|                                                |
--------------------------------------------------
	)
	index_enable = 1
	# Wenn gesetzt, werden externe Medien, auf die auf Seiten verlinkt wird, ebenfalls indiziert.
	index_externals = 1
}


# mmenu main/left config
page.jsFooterInline.5.26.value (
 /*  mmenu main/left config */
 if(winWidth < 768 && $menuLeft.length) {
 $('#menu-left').mmenu({
 'extensions': [
 'pagedim-black',
 'theme-dark',
 'effect-slide-menu',
 'shadow-page',
 'shadow-panels'
 ],
 'keyboardNavigation': true,
 'screenReader': true,
 'counters': false,
 'navbar': {
	'title': 'Thomas Wöhlke'
  },
 'navbars': [{
	'position': 'top',
	'content': [
		'prev',
		'title',
		'close'
	]
  },{
 'position': 'bottom',
 'content': [
 '<a class="glyphicon glyphicon-search" href="/information/suche/"></a>',
 '<a class="fa fa-envelope" href="/kontakt/"></a>',
 '<a class="fa fa-twitter" href="https://twitter.com/ThomasWoehlke\" target="_blank"></a>',
 '<a class="fa fa-facebook-official" href="https://www.facebook.com/thomas.wohlke/" target="_blank"></a>'
 ]
 }]
 });
 }
)

# mmenu right config
page.jsFooterInline.5.27.value (
 /*  mmenu right config */
 if(winWidth < 768 && $menuRight.length) {
 $('#lml')
 .after('<a id=\'rml\' href=\'#menu-right\'><i class=\'fa fa-chevron-circle-down fa-lg pull-right navbar-toggle\' aria-hidden=\'true\'></i></a>');
 $('#menu-right').mmenu({
 'offCanvas': {
 'position': 'right'
 },
 'extensions': [
 'pagedim-black',
 'theme-dark',
 'effect-slide-menu',
 'shadow-page',
 'shadow-panels'
 ],
 'keyboardNavigation': true,
 'screenReader': true,
 'counters': false,
 'navbar': {
	'title': 'Thomas Wöhlke'
  },
 });
 }
)

page.bodyTagCObject.wrap (
<body | >
<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v2.8&appId=742666935893488";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>
)
