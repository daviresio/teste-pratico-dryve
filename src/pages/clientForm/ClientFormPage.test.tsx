import React from 'react';
import {shallow} from 'enzyme'
import ClientFormPage from './ClientFormPage';

test('renders client form page', () => {
    const wrapper = shallow(<ClientFormPage />)
    expect(wrapper).toBeTruthy()
});
