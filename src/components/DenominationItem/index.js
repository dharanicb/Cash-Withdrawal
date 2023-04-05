// Write your code here
import './index.css'

const DenominationItem = props => {
  const {buttonValue} = props
  return (
    <button type="button" className="button">
      {buttonValue}
    </button>
  )
}

export default DenominationItem
