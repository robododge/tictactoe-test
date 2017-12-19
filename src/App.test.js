import React from 'react';
import App from './App';

import { shallow } from 'enzyme';


import {MemoryRouter} from 'react-router-dom'

it('renders without crashing', () => {
  const div = document.createElement('div');
  const AppWRouter = () => {
  	return (<MemoryRouter>
  				<App />
  			</MemoryRouter> )

  }

  shallow(<AppWRouter />)

})
