import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class CreateExpense extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
      detail: '',
      date: new Date(),
    }

    this.onChangeDetail = this.onChangeDetail.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
 

  onChangeDetail(e){
    this.setState({
      detail: e.target.value
    })
  }

  onChangeAmount(e){
    this.setState({
      amount: e.target.value
    })
  }

  onChangeDate(date){
    this.setState({
      date: date
    })
  }

  onSubmit(e){
    e.preventDefault();

    const expense = {
      detail: this.state.detail,
      amount: this.state.amount,
      date: this.state.date
    }

    console.log(expense);
    axios.post('http://localhost:5000/expenses/add', expense)
      .then(res => console.log(res.data));

    window.location = '/' ;
  }

  render() {
    return (
    <div>
      <h3>เพิ่มค่าใช้จ่าย</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Date: </label>
            <DatePicker
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
          <input type="submit" value="Create Expense Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}