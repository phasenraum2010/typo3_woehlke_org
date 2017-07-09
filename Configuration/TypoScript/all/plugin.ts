plugin {
	tx_typo3_woehlke_org {
		view {
			templateRootPaths {
				10 = EXT:typo3_woehlke_org/Resources/Private/Templates/
				20 = {$plugin.tx_typo3_woehlke_org.view.templateRootPath}
			}
			content.templateRootPaths {
				10 = EXT:typo3_woehlke_org/Resources/Private/Templates/Content/
				20 = {$plugin.tx_typo3_woehlke_org.view.content.templateRootPath}
			}
			partialRootPaths {
				10 = EXT:typo3_woehlke_org/Resources/Private/Partials/
				20 = {$plugin.tx_typo3_woehlke_org.view.partialRootPath}
			}
			layoutRootPaths {
				10 = EXT:typo3_woehlke_org/Resources/Private/Layouts/
				20 = {$plugin.tx_typo3_woehlke_org.view.layoutRootPath}
			}
		}
	}
	tx_indexedsearch {
		_CSS_DEFAULT_STYLE >
	}
	tx_powermail {
		view {
			templateRootPaths {
				300 = EXT:typo3_woehlke_org/Resources/Private/Extensions/powermail/Templates/
			}
			partialRootPaths {
				300 = EXT:typo3_woehlke_org/Resources/Private/Extensions/powermail/Partials/
			}
			layoutRootPaths {
				300 = EXT:typo3_woehlke_org/Resources/Private/Extensions/powermail/Layouts/
			}
		}
	}
	tx_news {
		view {
			templateRootPaths {
				10 = {$plugin.tx_news.view.twb.templateRootPath}
			}
			partialRootPaths {
				10 = {$plugin.tx_news.view.twb.partialRootPath}
			}
			layoutRootPaths {
				10 = {$plugin.tx_news.view.twb.layoutRootPath}
			}
		}
		settings {
			facebookLocale = de_DE
			googlePlusLocale = de
			disqusLocale = de
			includeSubCategories = 1
			categoryConjunction = 1
			startingpoint = 4
			recursive = 4
			#detailPid = 7
			#listPid = 6
			#backPid = 6
			detailPidDetermination = default
			cropMaxCharacters = 200
			overrideFlexformSettingsIfEmpty = backPid,listPid,startingpoint,recursive,list.paginate.itemsPerPage,cropMaxCharacters
			enablePreviewOfHiddenRecords = 1
			list {
				media.dummyImage = typo3conf/ext/typo3_woehlke_org/Resources/Public/Images/logo.jpg
				paginate {
					itemsPerPage = 5
					insertAbove = 1
					insertBelow = 1
					prevNextHeaderTags = 1
					maximumNumberOfLinks = 3
				}
			}
			detail {
				errorHandling = 18,404
				showPrevNext = 1
				disqusShortname = woehlke-org
			}
			link {
				hrDate = 1
				hrDate {
					day = d
					month = m
					year = Y
				}
			}
			facebookLocale = de_DE
			disqusLocale = de_DE
			googlePlusLocale = de_DE
		}
	}
	tx_indexedsearch {
		templateFile = {$plugin.tx_indexedsearch.templateFile}
	}
}


















