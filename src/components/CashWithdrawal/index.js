// Write your code here

import DenominationItem from '../DenominationItem'

import './index.css'

const CashWithdrawal = props => {
  const {denominationsDetails, sumValue} = props
  const {value} = denominationsDetails

  const onClickAmount = () => {
    sumValue(value)
  }

  return (
    <li className="list-container">
      <DenominationItem buttonValue={value} onClick={onClickAmount} />
    </li>
  )
}
export default CashWithdrawal
