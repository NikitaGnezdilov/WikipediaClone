import React from 'react'
import SidebarMenu from './components/menus/SidebarMenu'
import TopMenu from './components/menus/TopMenu'
import ContentMenu from './components/menus/ContentMenu'
import './styles/css/main.css'
import Footer from './components/Footer'

function App() {
	return (
		<>
			<ContentMenu />
			<div className='content'>
				<div className='main-menu-list'>
					<TopMenu />
					<SidebarMenu />
				</div>
			</div>
			<Footer/>
		</>
	)
}

export default App
