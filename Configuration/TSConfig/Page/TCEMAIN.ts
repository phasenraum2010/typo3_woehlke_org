TCEMAIN {
	preview {
		tx_news_domain_model_news {
			previewPageId = 7
			useDefaultLanguageRecord = 0
			fieldToParameterMap {
				uid = tx_news_pi1[news_preview]
			}
			additionalGetParameters {
				tx_news_pi1.controller = News
				tx_news_pi1.action = detail
			}
		}
	}
	clearCacheCmd = cacheTag:tx_news
	tt_content {
		pi_flexform {
			rxshariff_shariff {
				settings {
					data {
						twitter-via = port80guru
					}
				}
			}
		}
	}
}

