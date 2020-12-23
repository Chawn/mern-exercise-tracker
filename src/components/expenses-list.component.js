import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Expense = props => (
  <tr>
    <td>{props.expense._id}</td>
    <td>{props.expense.date.substring(0,10)}</td>
    <td>{props.expense.amount}</td>
    <td>{props.expense.detail}</td>
    <td>
      <Link to={"/edit/"+props.expense._id}>edit</Link> | <a href="#" onClick={() => { props.deleteExpense(props.expense._id) }}>delete</a>
    </td>

  </tr>
)

export default class ExpensesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExpense = this.deleteExpense.bind(this)

    this.state = {expenses: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/expenses/')
      .then(response => {
        this.setState({ expenses: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExpense(id) {
    axios.delete('http://localhost:5000/expenses/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      expenses: this.state.expenses.filter(el => el._id !== id)
    })
  }

  expenseList() {
    return this.state.expenses.map(currentexpense => {
      return <Expense expense={currentexpense} deleteExpense={this.deleteExpense} key={currentexpense._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>ค่าใช้จ่าย</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>วันที่</th>
              <th>จำนวนเงิน</th>
              <th>รายละเอียด</th>
              <th>จัดการ</th>
            </tr>
          </thead>
          <tbody>
            { this.expenseList() }
          </tbody>
        </table>
      </div>
    )
  }
}