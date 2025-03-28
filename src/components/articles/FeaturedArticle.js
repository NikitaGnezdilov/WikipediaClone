import React from 'react'
import teodorImg from '../../images/teodor.jpg'

function FeaturedArticle() {
	return (
		<section className='featured-article'>
			<h5 className='featured-article__subtitle'>Избранная статья</h5>
			<article className='featured-article__content'>
				<h3 className='featured-article__title'>
					<a
						href='https://ru.wikipedia.org/wiki/Еске-Хоинский,_Теодор'
						target='_blank'
						rel='noreferrer'
					>
						Теодор Еске-Хоинский
					</a>
				</h3>
				<p>
					<strong>Теодор Юзеф Фридерик Еске-Хоинский</strong> (
					<i>
						пол.{' '}
						<a
							href='https://pl.wikipedia.org/wiki/Teodor_Jeske-Choi%C5%84ski'
							target='_blank'
							rel='noreferrer'
						>
							Teodor Józef Fryderyk Jeske-Choiński
						</a>
					</i>
					; 27 февраля 1854, Плешев, королевство Пруссия — 14 апреля 1920,
					Варшава, Польская республика) — польский критик, романист и публицист,
					представитель&nbsp;
					<a
						href='https://ru.wikipedia.org/wiki/Младоконсерватизм'
						target='_blank'
						rel='noreferrer'
					>
						младоконсерватизма
					</a>
					.
				</p>
				<img src={teodorImg} alt='teodor-img' />
				<p>
					Противник литературной группировки&nbsp;
					<a
						href='https://ru.wikipedia.org/wiki/Молодая_Польша'
						target='_blank'
						rel='noreferrer'
					>
						«Молодая Польша»
					</a>{' '}
					— Еске-Хоинский начал свою литературную работу в либеральном
					направлении, выступал против ксёндзов («Kossak i Kuczma», 1876,
					«Karmazyn», 1877); сотрудничал в позитивистском журнале&nbsp;
					<a
						href='https://pl.wikipedia.org/wiki/Nowiny_(czasopismo)'
						target='_blank'
						rel='noreferrer'
					>
						«Nowiny»
					</a>
					. Впоследствии Еске-Хоинский перешёл в группу «младоконсерваторов» и
					стал деятельным участником их печатных органов —
					<a
						href='https://pl.wikipedia.org/wiki/Niwa_(czasopismo)'
						target='_blank'
						rel='noreferrer'
					>
						«Niwa»
					</a>{' '}
					и
					<a
						href='https://pl.wikipedia.org/wiki/Słowo_(czasopismo)'
						target='_blank'
						rel='noreferrer'
					>
						«Slowo»
					</a>
					.
				</p>
				<p>
					Из публицистических работ Еске-Хоинского наиболее известны:
					<i>«Pozytywizm warszawski i jego glowni przedstawiciele»</i>,&nbsp;
					<i>«Typy i idealy pozytiwistycznej beletrystiki polskiej»</i>,&nbsp;
					<i>«Poznaj żyda»</i> (1912),&nbsp;
					<i>«Dekadentyzm»</i> (1905), а также работы о&nbsp;
					<a
						href='https://ru.wikipedia.org/wiki/Немецкая_литература'
						target='_blank'
						rel='noreferrer'
					>
						немецкой литературе
					</a>{' '}
					и беллетристика о&nbsp;
					<a
						href='https://ru.wikipedia.org/wiki/Древний_Рим'
						target='_blank'
						rel='noreferrer'
					>
						Древнем Риме
					</a>
					:<i>«Gasnące Slonce»</i>, «Последние римляне» и др.
				</p>
			</article>
			<div className='featured-article__buttons'>
				<a
					href='https://ru.wikipedia.org/wiki/Еске-Хоинский,_Теодор'
					className='btn btn-read'
				>
					Читать
				</a>
				<a
					href='https://ru.wikipedia.org/wiki/Википедия:Избранные_статьи'
					className='btn btn-all'
				>
					Все избранные статьи
				</a>
				<button className='btn btn-more'>...</button>
			</div>
		</section>
	)
}

export default FeaturedArticle
