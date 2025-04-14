import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import SidebarMenu from './components/menus/SidebarMenu'
import TopMenu from './components/menus/TopMenu'
import ContentMenu from './components/menus/ContentMenu'
import Footer from './components/Footer'

import './styles/css/main.css'

function App() {
	return (
		<Router>
			<ContentMenu />
			<div className='content'>
				<div className='main-menu-list'>
					<TopMenu />
					<SidebarMenu />
				</div>
			</div>
			<Footer />
		</Router>
	)
}

export default App
