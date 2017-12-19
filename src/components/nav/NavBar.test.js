import React from "react";
import { mount, shallow} from "enzyme";

import NavBar from './NavBar'
import {MemoryRouter} from  'react-router-dom'

describe("NavBar", ()=> {

	// const NavBarWRouter = () => {
 //  	return (<MemoryRouter>
 //  				<NavBar />
 //  			</MemoryRouter> )

 //  }

	let mountedNavBar 

	const navBar = () => {
		if(!mountedNavBar) {
			mountedNavBar = mount(<MemoryRouter><NavBar /></MemoryRouter>)
		}

		return mountedNavBar
	}

	it('Always has a brand image', ()=> {
		const brandDiv = navBar().find('.navbar-brand')

		//console.log('NavBar,', navBar())
		expect(brandDiv).toBeDefined()

		console.log(brandDiv.type())

		const imgEle = brandDiv.find('.brand-img')
		expect(imgEle).toBeTruthy()
		expect(imgEle.type()).toBe('img')
	})
})