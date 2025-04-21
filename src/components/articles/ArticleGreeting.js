import React from 'react'
import { useTranslation } from 'react-i18next'

function ArticleGreeting() {
	const { t } = useTranslation()
	return (
		<section className='article-greeting greeting-wrapper'>
			<div className='greeting-text'>
				<h1>
					{t('article-greeting.greeting-text1')}{' '}
					<a href='#'>{t('article-greeting.greeting-text2')}</a>,
				</h1>
				<p>
					<a href='#'>{t('article-greeting.greeting-text3')}</a>,{' '}
					{t('article-greeting.greeting-text4')}&nbsp;
					<a href='#'>{t('article-greeting.greeting-text5')}</a>.
				</p>
			</div>
			<section className='wiki-stats'>
				<p className='wiki-stats__text'>
					{t('article-greeting.wiki-stats.text.text1')}{' '}
					<a href='#'>{t('article-greeting.wiki-stats.text.text2')}</a>{' '}
					{t('article-greeting.wiki-stats.text.text3')}{' '}
					<a href='#'>{t('article-greeting.wiki-stats.text.text4')}</a>.
				</p>
				<div className='wiki-stats__links'>
					<a href='#'>{t('article-greeting.wiki-stats.links.link1')}</a>
					<a href='#'>{t('article-greeting.wiki-stats.links.link2')}</a>
					<a href='#' className='create-article'>
						{t('article-greeting.wiki-stats.links.link3')}
					</a>
				</div>
			</section>
		</section>
	)
}

export default ArticleGreeting
