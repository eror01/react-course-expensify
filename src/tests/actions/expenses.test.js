import { addExpanse, editExpanse, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup edit expense action object', () => {
   const action = editExpanse('123abc', {note: 'New note value'});
   expect(action).toEqual({
       type: 'EDIT_EXPANSE',
       id: '123abc',
       updates: {
           note: 'New note value'
       }
   })
});

test('should setup add expanse action object with provided values', () => {
    const expanseData = {
        description: 'Rent',
        amount: 1095,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpanse(expanseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expanseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expanse action object with default values', () =>{
    const expanseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    const action = addExpanse(expanseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expanseData,
            id: expect.any(String)
        }
    })
});