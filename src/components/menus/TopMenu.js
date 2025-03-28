import React from "react";
import { HiUser } from 'react-icons/hi'

function TopMenu() {
  return (
		<div className='horizontal-menu horizontal-menu--position'>
			<div className='horizontal-menu__state-profile'></div>
			<nav className='horizontal-menu__nav-panel'>
				<ul>
					<li className='horizontal-menu__item horizontal-menu__item--user-not-logged'>
						<HiUser className='horizontal-menu__item--logo-person' />
						<a href='#'>Вы не представились системе</a>
					</li>
					<li className='horizontal-menu__item'>
						<a href='#'>Обсуждение</a>
					</li>
					<li className='horizontal-menu__item'>
						<a href='#'>Вклад</a>
					</li>
					<li className='horizontal-menu__item'>
						<a href='#'>Создать учетную запись</a>
					</li>
					<li className='horizontal-menu__item'>
						<a href='#'>Войти</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default TopMenu