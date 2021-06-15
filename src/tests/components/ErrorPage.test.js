import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../components/ErrorPage'

test('should render help page correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot();
});