import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExpense extends Component {
  constructor(props) {
    super(props);

    this.onChangeDetail = this.onChangeDetail.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      amount: '',
      detail: '',
      date: new Date(),
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/expenses/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          amount: response.data.amount,
          detail: response.data.detail,
          date: new Date(response.data.date)
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  onChangeAmount(e) {
    this.setState({
      amount: e.target.value
    })
  }

  onChangeDetail(e) {
    this.setState({
      detail: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const expense = {
      amount: this.state.amount,
      detail: this.state.detail,
      date: this.state.date
    }

    console.log(expense);

    axios.post('http://localhost:5000/expenses/update/' + this.props.match.params.id, expense)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>แก้ไขค่าใช้จ่าย</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Date: </label>
            <DatePicker
              className="form-control"
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
        </div>
        <div className="form-group"> 
          <label>จำนวนเงิน: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.amount}
              onChange={this.onChangeAmount}
              />
        </div>
        <div className="form-group"> 
          <label>รายละเอียด: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.detail}
              onChange={this.onChangeDetail}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Expense Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}