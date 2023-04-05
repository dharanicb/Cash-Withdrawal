import {Component} from 'react'

import CashWithdrawal from './components/CashWithdrawal'

import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class App extends Component {
  state = {amount: 2000, denominations: denominationsList}

  sumValue = value => {
    // const {denominations} = this.state
    // const {value} = denominations
    // const filteredTodoList = denominations.filter(each => each.id !== id)
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount, denominations} = this.state

    return (
      <div className="card-container">
        <div className="container">
          <div className="profile-name-container">
            <p className="profile">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="account-details">
            <p className="account">Your balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="rupees">In rupee</p>
            </div>
          </div>
          <p className="profile-name">Withdraw</p>
          <p className="amount">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominations.map(eachUser => (
              <CashWithdrawal
                denominationsDetails={eachUser}
                key={eachUser.id}
                sumValue={this.sumValue}
                amount={amount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

// {/* <CashWithdrawal denominationsList={denominationsList} /> */}

export default App
