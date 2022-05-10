import ReactDOM from 'react-dom'

import './styles.css'

const Portal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className='Modal container'>{children}</div>,
    document.getElementById('portal')
  )
}

export default Portal
