import React from 'react'
import mediawikiLogo from '../images/logo.jpg'

function Footer() {
	return (
		<footer className='wiki-footer'>
			<div className='wiki-footer__top'>
				<p>
					Текст доступен по лицензии{' '}
					<a
						href='https://creativecommons.org/licenses/by-sa/3.0/deed.ru'
						target='_blank'
						rel='noreferrer'
					>
						Creative Commons «С указанием авторства — С сохранением условий» (CC
						BY-SA)
					</a>
					; в отдельных случаях могут действовать дополнительные условия.
					Подробнее см.&nbsp;
					<a
						href='https://foundation.wikimedia.org/wiki/Terms_of_Use/ru'
						target='_blank'
						rel='noreferrer'
					>
						Условия использования
					</a>
					.
					<br />
					Wikipedia® — зарегистрированный товарный знак некоммерческой
					организации{' '}
					<a
						href='https://wikimediafoundation.org/'
						target='_blank'
						rel='noreferrer'
					>
						«Фонд Викимедиа»
					</a>{' '}
					(Wikimedia Foundation, Inc.)
				</p>
			</div>
			<div className='wiki-footer__middle'>
				<ul>
					<li>
						<a href='#'>Политика конфиденциальности</a>
					</li>
					<li>
						<a href='#'>Описание Википедии</a>
					</li>
					<li>
						<a href='#'>Отказ от ответственности</a>
					</li>
					<li>
						<a href='#'>Свяжитесь с нами</a>
					</li>
					<li>
						<a href='#'>Кодекс поведения</a>
					</li>
					<li>
						<a href='#'>Разработчики</a>
					</li>
					<li>
						<a href='#'>Статистика</a>
					</li>
					<li>
						<a href='#'>Заявление о куки</a>
					</li>
					<li>
						<a href='#'>Мобильная версия</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default Footer
