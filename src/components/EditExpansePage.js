import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpanse, removeExpense } from '../actions/expenses';

export class EditExpansePage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpanse(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onRemove = () => {
        this.props.removeExpense({ id: this.props.expense.id })
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
    editExpanse: (id, expense) => dispatch(editExpanse(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpansePage);