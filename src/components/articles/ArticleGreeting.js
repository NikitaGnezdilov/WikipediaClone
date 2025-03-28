import React from 'react'

function ArticleGreeting() {
	return (
		<section className='article-greeting greeting-wrapper'>
			<div className='greeting-text'>
				<h1>
					Добро пожаловать в <a href='#'>Википедию</a>,
				</h1>
				<p>
					<a href='#'>свободную энциклопедию</a>, которую&nbsp;
					<a href='#'>может редактировать каждый</a>.
				</p>
			</div>
			<section className='wiki-stats'>
				<p className='wiki-stats__text'>
					Сейчас в Википедии <a href='#'>2 035 926 статей</a> на{' '}
					<a href='#'>русском языке</a>.
				</p>
				<div className='wiki-stats__links'>
					<a href='#'>Порталы</a>
					<a href='#'>Справка</a>
					<a href='#' className='create-article'>
						Создать статью
					</a>
				</div>
			</section>
		</section>
	)
}

export default ArticleGreeting
