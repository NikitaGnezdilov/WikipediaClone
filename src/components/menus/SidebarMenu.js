import React from 'react'
import logo from '../../images/logo.jpg'

function SidebarMenu() {
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
						<li>
							<a href='#'>Заглавная страница</a>
						</li>
						<li>
							<a href='#'>Содержание</a>
						</li>
						<li>
							<a href='#'>Избранные статьи</a>
						</li>
						<li>
							<a href='#'>Случайная статья</a>
						</li>
						<li>
							<a href='#'>Текущие события</a>
						</li>
						<li>
							<a href='#'>Пожертвовать</a>
						</li>
					</ul>
				</nav>
				<nav className='vertical-header__participation-links'>
					<h3>Участие</h3>
					<ul>
						<li>
							<a href='#'>Сообщить об ошибке</a>
						</li>
						<li>
							<a href='#'>Как править статьи</a>
						</li>
						<li>
							<a href='#'>Сообщество</a>
						</li>
						<li>
							<a href='#'>Форум</a>
						</li>
						<li>
							<a href='#'>Свежие правки</a>
						</li>
						<li>
							<a href='#'>Новые страницы</a>
						</li>
						<li>
							<a href='#'>Справка</a>
						</li>
					</ul>
				</nav>
				<nav className='vertical-header__tool-links'>
					<h3>Инструменты</h3>
					<ul>
						<li>
							<a href='#'>Ссылки сюда</a>
						</li>
						<li>
							<a href='#'>Связанные правки</a>
						</li>
						<li>
							<a href='#'>Служебные страницы</a>
						</li>
						<li>
							<a href='#'>Постоянная ссылка</a>
						</li>
						<li>
							<a href='#'>Сведения о странице</a>
						</li>
						<li>
							<a href='#'>Получить короткий URL</a>
						</li>
						<li>
							<a href='#'>Скачать QR-код</a>
						</li>
						<li>
							<a href='#'>Развернуть всё</a>
						</li>
					</ul>
				</nav>
				<nav className='vertical-header__export-print-links'>
					<h3>Печать/экспорт</h3>
					<ul>
						<li>
							<a href='#'>Скачать как PDF</a>
						</li>
						<li>
							<a href='#'>Версия для печати</a>
						</li>
					</ul>
				</nav>
				<nav className='vertical-header__other-projects-links'>
					<h3>В других проектах</h3>
					<ul>
						<li>
							<a href='#'>Викисклад</a>
						</li>
						<li>
							<a href='#'>Фонд Викимедиа</a>
						</li>
						<li>
							<a href='#'>Медиавики</a>
						</li>
						<li>
							<a href='#'>Мета-вики</a>
						</li>
						<li>
							<a href='#'>Популяризация Викимедиа</a>
						</li>
						<li>
							<a href='#'>Многоязычная Викитека</a>
						</li>
						<li>
							<a href='#'>Викивиды</a>
						</li>
						<li>
							<a href='#'>Викиучебник</a>
						</li>
						<li>
							<a href='#'>Викиданные</a>
						</li>
						<li>
							<a href='#'>Викифункции</a>
						</li>
						<li>
							<a href='#'>Викимания</a>
						</li>
						<li>
							<a href='#'>Викиновости</a>
						</li>
						<li>
							<a href='#'>Викицитатник</a>
						</li>
						<li>
							<a href='#'>Викитека</a>
						</li>
						<li>
							<a href='#'>Викиверситет</a>
						</li>
						<li>
							<a href='#'>Викигид</a>
						</li>
						<li>
							<a href='#'>Викисловарь</a>
						</li>
						<li>
							<a href='#'>Элемент Викиданных</a>
						</li>
					</ul>
				</nav>
				<nav className='vertical-header__languages-links'>
					<h3>На других языках</h3>
					<ul>
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
						</li>й
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
							<a href='#'>English</a>
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
