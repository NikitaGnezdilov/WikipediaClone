import React from 'react'
import logo from '../../images/logo.jpg'
import { useTranslation } from 'react-i18next'

function SidebarMenu() {
	const { t, i18n } = useTranslation()

	const handleLanguageChange = lang => {
		i18n.changeLanguage(lang)
		localStorage.setItem('lang', lang)
	}

	return (
		<header className='vertical-header'>
			<div className='vertical-header__logo'>
				<a href='#' title='Перейти на главную страницу'>
					<img src={logo} alt='logo' />
				</a>
			</div>
			<div className='vertical-header__menu vertical-header__menu--left-margin'>
				<nav className='vertical-header__main-links'>
					<ul>
						<li><a href='#'>{t('sidebar.main.mainPage')}</a></li>
						<li><a href='#'>{t('sidebar.main.contents')}</a></li>
						<li><a href='#'>{t('sidebar.main.featured')}</a></li>
						<li><a href='#'>{t('sidebar.main.random')}</a></li>
						<li><a href='#'>{t('sidebar.main.currentEvents')}</a></li>
						<li><a href='#'>{t('sidebar.main.donate')}</a></li>
					</ul>
				</nav>

				<nav className='vertical-header__participation-links'>
					<h3>{t('sidebar.participation.title')}</h3>
					<ul>
						<li><a href='#'>{t('sidebar.participation.reportError')}</a></li>
						<li><a href='#'>{t('sidebar.participation.editGuide')}</a></li>
						<li><a href='#'>{t('sidebar.participation.community')}</a></li>
						<li><a href='#'>{t('sidebar.participation.forum')}</a></li>
						<li><a href='#'>{t('sidebar.participation.recentChanges')}</a></li>
						<li><a href='#'>{t('sidebar.participation.newPages')}</a></li>
						<li><a href='#'>{t('sidebar.participation.help')}</a></li>
					</ul>
				</nav>

				<nav className='vertical-header__tool-links'>
					<h3>{t('sidebar.tools.title')}</h3>
					<ul>
						<li><a href='#'>{t('sidebar.tools.whatLinksHere')}</a></li>
						<li><a href='#'>{t('sidebar.tools.relatedChanges')}</a></li>
						<li><a href='#'>{t('sidebar.tools.specialPages')}</a></li>
						<li><a href='#'>{t('sidebar.tools.permanentLink')}</a></li>
						<li><a href='#'>{t('sidebar.tools.pageInfo')}</a></li>
						<li><a href='#'>{t('sidebar.tools.shortURL')}</a></li>
						<li><a href='#'>{t('sidebar.tools.qrCode')}</a></li>
						<li><a href='#'>{t('sidebar.tools.expandAll')}</a></li>
					</ul>
				</nav>

				<nav className='vertical-header__export-print-links'>
					<h3>{t('sidebar.printExport.title')}</h3>
					<ul>
						<li><a href='#'>{t('sidebar.printExport.downloadPDF')}</a></li>
						<li><a href='#'>{t('sidebar.printExport.printVersion')}</a></li>
					</ul>
				</nav>

				<nav className='vertical-header__other-projects-links'>
					<h3>{t('sidebar.sisterProjects.title')}</h3>
					<ul>
						<li><a href='#'>{t('sidebar.sisterProjects.commons')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikimedia')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.mediawiki')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.meta')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.outreach')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.multilingual')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.species')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikibooks')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikidata')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikifunctions')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikimania')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikinews')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikiquote')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikisource')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikiversity')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikivoyage')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wiktionary')}</a></li>
						<li><a href='#'>{t('sidebar.sisterProjects.wikidataItem')}</a></li>
					</ul>
				</nav>

				<nav className='vertical-header__languages-links'>
					<h3>{t('sidebar.languages.title')}</h3>
					<ul>
						<li><button onClick={() => handleLanguageChange('ru')}>Русский</button></li>
						<li><button onClick={() => handleLanguageChange('en')}>English</button></li>
						<li>
							<a href='#'>العربية</a>
						</li>
						<li>
							<a href='#'>Azərbaycanca</a>
						</li>
						<li>
							<a href='#'>Башҡортса</a>
						</li>
						<li>
							<a href='#'>Беларуская</a>
						</li>
						<li>
							<a href='#'>Беларуская (тарашкевіца)</a>
						</li>
						<li>
							<a href='#'>Български</a>
						</li>
						<li>
							<a href='#'>Нохчийн</a>
						</li>
						<li>
							<a href='#'>Čeština</a>
						</li>
						<li>
							<a href='#'>Чӑвашла</a>
						</li>
						<li>
							<a href='#'>Dansk</a>
						</li>
						<li>
							<a href='#'>Deutsch</a>
						</li>
						<li>
							<a href='#'>Ελληνικά</a>
						</li>
						<li>
							<a href='#'>Español</a>
						</li>
						<li>
							<a href='#'>Eesti</a>
						</li>
						<li>
							<a href='#'>فارسی</a>
						</li>
						<li>
							<a href='#'>Suomi</a>
						</li>
						<li>
							<a href='#'>Français</a>
						</li>
						<li>
							<a href='#'>עברית</a>
						</li>
						<li>
							<a href='#'>Magyar</a>
						</li>
						<li>
							<a href='#'>Հայերեն</a>
						</li>
						<li>
							<a href='#'>Italiano</a>
						</li>
						<li>
							<a href='#'>日本語</a>
						</li>
						<li>
							<a href='#'>ქართული</a>
						</li>
						<li>
							<a href='#'>Қазақша</a>
						</li>
						<li>
							<a href='#'>한국어</a>
						</li>
						<li>
							<a href='#'>Lietuvių</a>
						</li>
						<li>
							<a href='#'>Latviešu</a>
						</li>
						<li>
							<a href='#'>Nederlands</a>
						</li>
						<li>
							<a href='#'>Norsk bokmål</a>
						</li>
						<li>
							<a href='#'>Ирон</a>
						</li>
						<li>
							<a href='#'>Polski</a>
						</li>
						<li>
							<a href='#'>Português</a>
						</li>
						<li>
							<a href='#'>Română</a>
						</li>
						<li>
							<a href='#'>Саха тыла</a>
						</li>
						<li>
							<a href='#'>Српски / srpski</a>
						</li>
						<li>
							<a href='#'>Svenska</a>
						</li>
						<li>
							<a href='#'>Türkçe</a>
						</li>
						<li>
							<a href='#'>Татарча / tatarça</a>
						</li>
						<li>
							<a href='#'>Українська</a>
						</li>
						<li>
							<a href='#'>Tiếng Việt</a>
						</li>
						<li>
							<a href='#'>中文</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default SidebarMenu

