import React, { useState } from 'react'
import FeaturedArticle from '../articles/FeaturedArticle'
import ArticleGreeting from '../articles/ArticleGreeting'
import RecentArticles from '../articles/RecentArticles'

function ContentMenu() {
	const [activeTab, setActiveTab] = useState('Заглавная')

	const handleTabClick = tabName => {
		setActiveTab(tabName)
	}

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
								Заглавная
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
								Обсуждение
							</a>
						</li>
					</ul>
				</nav>

				<div className='vector-menu-toolbar'>
					<div className='vector-menu-toolbar__buttons'>
						<button className='vector-menu-button'>Читать</button>
						<button className='vector-menu-button'>Просмотр кода</button>
						<button className='vector-menu-button'>История</button>
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
						<h1>Обсуждение:Заглавная страница</h1>
						<p className='article-subtitle'>
							Материал из Википедии — свободной энциклопедии
						</p>
						<div className='discussion-box top-warning'>
							<h4>
								<strong>
									Эта страница — не <a href='#'>форум</a> для обсуждения
									Википедии в целом.
								</strong>
							</h4>
							<p>
								Здесь обсуждается только сама заглавная страница и включённые в
								неё шаблоны.
							</p>
							<p>См. также частные обсуждения:</p>
							<ul>
								<li>
									<a href='#'>Знаете ли вы + подготовка следующего выпуска</a>
								</li>
								<li>
									<a href='#'>Текущие события</a>
								</li>
							</ul>
						</div>
						<div className='discussion-box statistics'>
							<a href='#'>Статистика просмотров страницы</a> «Заглавная
							страница»
						</div>
						<div className='discussion-box'>
							<strong>
								Эта статья выставлялась на удаление и была оставлена.
							</strong>
							<p>
								Пояснение причин и соответствующее обсуждение вы можете найти на
								странице <a href='#'>Википедия:К удалению/10 марта 2007</a>.
								Повторное выставление <a href='#'>допустимо лишь</a> при наличии
								аргументов, не рассмотренных в прошлых номинациях, при изменении
								обстоятельств вокруг предмета статьи или изменении правил
								Википедии, в противном случае повторная заявка будет быстро
								закрыта.
							</p>
						</div>
						<div className='discussion-box'>
							<strong>
								Эта страница выставлялась на удаление 1 апреля{' '}
								<a href='#'>2008 года</a>,{' '}
								<a href='#' className='red-link'>
									2009 года
								</a>
								,{' '}
								<a href='#' className='red-link'>
									2012 года
								</a>
								,{' '}
								<a href='#' className='red-link'>
									2013 года
								</a>
								, <a href='#'>2014 года</a>, <a href='#'>2022 года</a>,{' '}
								<a href='#'>2023 года</a>, <a href='#'>2024 года</a>.
							</strong>
						</div>
						<div className='discussion-box'>
							<p>
								Эта статья была <a href='#'>предложена к переименованию</a> 1
								апреля 2012 года.
							</p>
							<p>
								В результате обсуждения было решено оставить название{' '}
								<strong>Заглавная страница</strong> без изменений.
							</p>
							<p>
								Для повторного выставления статьи на переименование нужны веские
								основания, иначе это может быть расценено как{' '}
								<a href='#'>игра с правилами</a>.
							</p>
						</div>
						<div className='discussion-box'>
							<p>
								Эта статья была <a href='#'>предложена к переименованию</a> в
								<strong>Главная_страница</strong> 20 сентября 2012 года.
							</p>
							<p>
								В результате обсуждения было решено оставить название
								<strong>Заглавная_страница</strong> без изменений.
							</p>
							<p>
								Для повторного выставления статьи на переименование нужны{' '}
								<a href='#'>веские основания</a>, иначе это может быть расценено
								как <a href='#'>игра с правилами</a>.
							</p>
						</div>
						<div className='discussion-box'>
							<p>
								Эта статья была <a href='#'>предложена к переименованию</a> 7
								февраля 2019 года.
							</p>
							<p>
								В результате обсуждения было решено оставить название{' '}
								<strong>Заглавная страница</strong> без изменений.
							</p>
							<p>
								Для повторного выставления статьи на переименование нужны{' '}
								<a href='#'>веские основания</a>, иначе это может быть расценено
								как <a href='#'>игра с правилами</a>.
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default ContentMenu
