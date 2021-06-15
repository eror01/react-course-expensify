import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpanse } from '../actions/expenses';

export class AddExpansePage extends React.Component {
    onSubmit = (expense) => {
        this.props.addExpanse(expense)
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm 
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    };
};

const mapDispatchToProps = (dispatch) => ({
    addExpanse: (expense) => dispatch(addExpanse(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpansePage);