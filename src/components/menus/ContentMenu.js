import React, { useState } from 'react'
import FeaturedArticle from '../articles/FeaturedArticle'
import ArticleGreeting from '../articles/ArticleGreeting'
import RecentArticles from '../articles/RecentArticles'
import { useTranslation } from 'react-i18next'



function ContentMenu() {
	const [activeTab, setActiveTab] = useState('Заглавная')

	const handleTabClick = tabName => {
		setActiveTab(tabName)
	}
	const { t } = useTranslation()

	return (
		<div className='vector-menu-content'>
			{/* Верхняя строка: вкладки + кнопки + поиск */}
			<div className='vector-menu-container'>
				<nav>
					<ul className='vector-menu-content-list'>
						<li className='vector-menu-content-list__item'>
							<a
								href='#'
								className={`vector-menu-content-list__link ${
									activeTab === 'Заглавная' ? 'active' : ''
								}`}
								onClick={() => handleTabClick('Заглавная')}
							>
								{t('menu.main')}
							</a>
						</li>
						<li className='vector-menu-content-list__item'>
							<a
								href='#'
								className={`vector-menu-content-list__link ${
									activeTab === 'Обсуждение' ? 'active' : ''
								}`}
								onClick={() => handleTabClick('Обсуждение')}
							>
								{t('menu.discussion')}
							</a>
						</li>
					</ul>
				</nav>

				<div className='vector-menu-toolbar'>
					<div className='vector-menu-toolbar__buttons'>
						<button className='vector-menu-button'>{t('toolbar.read')}</button>
						<button className='vector-menu-button'>{t('toolbar.code')}</button>
						<button className='vector-menu-button'>
							{t('toolbar.history')}
						</button>
					</div>
					<div className='vector-menu-toolbar__search'>
						<div className='vector-search-wrapper'>
							<input
								type='text'
								className='vector-menu-search'
								placeholder='Искать в Википедии'
							/>
							<span className='search-icon'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									width='14'
									height='14'
									fill='currentColor'
									viewBox='0 0 16 16'
								>
									<path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
								</svg>
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* Контент вкладок */}
			<div className='tab-content'>
				{activeTab === 'Заглавная' && (
					<div className='tab-content__cont'>
						<ArticleGreeting />
						<div className='main-sections-row'>
							<FeaturedArticle />
							<RecentArticles />
						</div>
					</div>
				)}
				{activeTab === 'Обсуждение' && (
					<div className='tab-content__section discussion'>
						<h1>{t('discussion.title')}</h1>
						<p className='article-subtitle'>{t('discussion.subtitle')}</p>
						<div className='discussion-box top-warning'>
							<h4>
								<strong>
									{t('discussion.notice_first')}{' '}
									<a href='#'>{t('discussion.notice_second')}</a>
									{t('discussion.notice_third')}
								</strong>
							</h4>
							<p>{t('discussion.about')}</p>
							<p>{t('discussion.seeAlso')}</p>
							<ul>
								<li>
									<a href='#'>{t('discussion.seeAlso1')}</a>
								</li>
								<li>
									<a href='#'>{t('discussion.seeAlso2')}</a>
								</li>
							</ul>
						</div>
						<div className='discussion-box statistics'>
							<a href='#'>{t('discussion.stats1')}</a> {t('discussion.stats2')}
						</div>
						<div className='discussion-box'>
							<strong>{t('discussion.deleted')}</strong>
							<p>
								{t('discussion.explanation1')}
								<a href='#'>{t('discussion.explanation2')}</a>.{' '}
								{t('discussion.explanation3')}
								<a href='#'>{t('discussion.explanation4')}</a>
								{''}
								{t('discussion.explanation5')}
							</p>
						</div>
						<div className='discussion-box'>
							<strong>
								{t('discussion.multipleDeletions_text')}{' '}
								<a href='#'>{t('discussion.multipleDeletions1')}</a>,{' '}
								<a href='#' className='red-link'>
									{t('discussion.multipleDeletions2')}
								</a>
								,{' '}
								<a href='#' className='red-link'>
									{t('discussion.multipleDeletions3')}
								</a>
								,{' '}
								<a href='#' className='red-link'>
									{t('discussion.multipleDeletions4')}
								</a>
								, <a href='#'>{t('discussion.multipleDeletions5')}</a>,{' '}
								<a href='#'>{t('discussion.multipleDeletions6')}</a>,{' '}
								<a href='#'>{t('discussion.multipleDeletions7')}</a>,{' '}
								<a href='#'>{t('discussion.multipleDeletions8')}</a>.
							</strong>
						</div>
						<div className='discussion-box'>
							<p>
								{t('discussion.renaming1-1')}
								<a href='#'>{t('discussion.renaming1-2')}</a>
								{t('discussion.renaming1-3')}
							</p>
							<p>
								{t('discussion.result1-1')}{' '}
								<strong>{t('discussion.result1-2')}</strong>
								{t('discussion.result1-3')}
							</p>
							<p>
								{t('discussion.rules1-1')}
								<a href='#'>{t('discussion.rules1-2')}</a>.
							</p>
						</div>
						<div className='discussion-box'>
							<p>
								{t('discussion.renaming2-1')}
								<a href='#'>{t('discussion.renaming2-2')}</a>{' '}
								{t('discussion.renaming2-3')}
								<strong> {t('discussion.renaming2-4')}</strong>{' '}
								{t('discussion.renaming2-5')}
							</p>
							<p>
								{t('discussion.result2-1')}
								<strong> {t('discussion.result2-2')}</strong>{' '}
								{t('discussion.result2-3')}
							</p>
							<p>
								{t('discussion.rules2-1')}
								<a href='#'> {t('discussion.rules2-2')}</a>,{' '}
								{t('discussion.rules2-3')}
								<a href='#'> {t('discussion.rules2-4')}</a>.
							</p>
						</div>
						<div className='discussion-box'>
							<p>
								{t('discussion.renaming3-1')}{' '}
								<a href='#'>{t('discussion.renaming3-2')}</a>{' '}
								{t('discussion.renaming3-3')}
							</p>
							<p>
								{t('discussion.result3-1')}
								<strong>{' '}{t('discussion.result3-2')}</strong>{' '}
								{t('discussion.result3-3')}
							</p>
							<p>
								{t('discussion.rules3-1')}
								<a href='#'>{' '}{t('discussion.rules3-2')}</a>,{' '}
								{t('discussion.rules3-3')}
								<a href='#'>{' '}{t('discussion.rules3-4')}</a>.
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default ContentMenu
