import React from 'react';
import {shallow} from 'enzyme'
import ClientListPage from './ClientListPage';

test('renders clients page', () => {
    const wrapper = shallow(<ClientListPage />)
    expect(wrapper).toBeTruthy()
});
