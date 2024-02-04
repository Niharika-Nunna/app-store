import './index.css'

const TabItem = props => {
  const {tabDetails, onTabChanged, isActive} = props
  const {tabId, displayText} = tabDetails
  const onTabClicked = () => {
    onTabChanged(tabId)
  }
  const buttonClassName = isActive ? 'tab-button active' : 'tab-button'
  return (
    <li className="tab-list">
      <button className={buttonClassName} type="button" onClick={onTabClicked}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
