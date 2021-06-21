import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpanse, startRemoveExpense } from '../actions/expenses';

export class EditExpansePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpanse(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemove}>Remove</button>
        </div>
        );
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpanse: (id, expense) => dispatch(startEditExpanse(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpansePage);