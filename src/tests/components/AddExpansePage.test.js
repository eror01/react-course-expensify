import React from 'react';
import { shallow } from 'enzyme';
import { AddExpansePage } from '../../components/AddExpansePage';
import expenses from '../fixtures/expenses';

let addExpanse, history, wrapper;

beforeEach(() => {
    addExpanse = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpansePage addExpanse={addExpanse} history={history}/>);
});

test('should render AddExpansePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
}); 

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpanse).toHaveBeenLastCalledWith(expenses[1]);
});