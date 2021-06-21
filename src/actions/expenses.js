import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpanse = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const { 
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpanse({
                id: ref.key,
                ...expense
            }))
        });
    };
};

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpanse = (id, updates) => ({
    type: 'EDIT_EXPANSE',
    id,
    updates
});