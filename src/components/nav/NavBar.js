

import React from 'react';

import {NavLink} from 'react-router-dom';

import './NavBar.css'
import brandLogo from '../../images/brand-logo.png'

const WrapNavLink = ({exact,to,children}) => {
	return (<NavLink exact={exact} activeClassName="active" to={to} >{children}</NavLink>)
}

export default class NavBar extends React.Component {

	componentDidMount() {
		const toggle = document.getElementsByClassName('navbar-toggle')[0]
    	this.collapse = document.getElementsByClassName('navbar-collapse')[0]
    	this.dropdowns = document.getElementsByClassName('dropdown')
    	this.linkItems = document.querySelectorAll('.navbar-nav>li>a:not([data-toggle])')
    	const clientWidth = document.body.clientWidth


    	const closeMenusFn = this.closeMenus
    	const dropdownsScoped = this.dropdowns
    	const safeToggleMenu = this.toggleMenu.bind(this)

    	//After clicking a link in the menu, need to close expaned nav menus

    	for (let i = 0; i< this.linkItems.length; i++) {
    		if(clientWidth < 768) {
    			this.linkItems[i].addEventListener( 'click', safeToggleMenu)
    		}
    	}

	    for (let i = 0; i < this.dropdowns.length; i++) {
		    this.dropdowns[i].addEventListener('click', function() {
		        if (clientWidth < 768) {
		            let open = this.classList.contains('open');
		            closeMenusFn(dropdownsScoped);
		            if (!open) {
		                this.getElementsByClassName('dropdown-toggle')[0].classList.toggle('dropdown-open');
		                this.classList.toggle('open');
		            }
		        }
		    });
		}


	const safeCloseMenuOnResize = () =>() => this.closeMenusOnResize(this.dropdowns, this.collapse, closeMenusFn)
	window.addEventListener('resize', safeCloseMenuOnResize(), false);
	if(toggle){
		toggle.addEventListener('click', safeToggleMenu, false);
	}

	}

	closeMenus(dropdowns) {
	    for (var j = 0; j < dropdowns.length; j++) {
	        dropdowns[j].getElementsByClassName('dropdown-toggle')[0].classList.remove('dropdown-open');
	        dropdowns[j].classList.remove('open');
	    }
	}

	 closeMenusOnResize(dropdowns,collapse,closeMenusFn) {
	 	if (document.body.clientWidth >= 768) {
        	closeMenusFn(dropdowns)
        	collapse.classList.add('collapse')
        	collapse.classList.remove('in')
        }
    }


	 toggleMenu() {
	 	this.collapse.classList.toggle('collapse');
    	this.collapse.classList.toggle('in');
	 }



	render() {
		return ( <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand brand-override" href="/"><img className="brand-img" alt="Tic Tac" src={brandLogo} /></a>
            <div className="navbar-brand override-text">TicTacToe</div>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><WrapNavLink exact={true} to="/" >Home</WrapNavLink></li>
              <li><WrapNavLink to="/selectopp" >Opponents</WrapNavLink></li>
              <li><WrapNavLink to="/about" >About</WrapNavLink></li>
            </ul>
          </div>
        </div>
      </nav> )

	}



}