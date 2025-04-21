import React from 'react'
import { HiUser } from 'react-icons/hi'
import { useTranslation } from 'react-i18next'

function TopMenu() {
	const { t } = useTranslation()
	return (
		<div className='horizontal-menu horizontal-menu--position'>
			<div className='horizontal-menu__state-profile'></div>
			<nav className='horizontal-menu__nav-panel'>
				<ul>
					<li className='horizontal-menu__item horizontal-menu__item--user-not-logged'>
						<HiUser className='horizontal-menu__item--logo-person' />
						<a href='#'>{t('top-menu.logged_info')}</a>
					</li>
					<li className='horizontal-menu__item'>
						<a href='#'>{t('top-menu.menu__item1')}</a>
					</li>
					<li className='horizontal-menu__item'>
						<a href='#'>{t('top-menu.menu__item2')}</a>
					</li>
					<li className='horizontal-menu__item'>
						<a href='#'>{t('top-menu.menu__item3')}</a>
					</li>
					<li className='horizontal-menu__item'>
						<a href='#'>{t('top-menu.menu__item4')}</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default TopMenu
