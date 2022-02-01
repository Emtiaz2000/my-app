import ReactDom from 'react-dom'
import '../index.css'
export default function Model(props) {
  return ReactDom.createPortal((
  <div className="model_popup">
      <div className='model'>
          {props.children}
          <button onClick={props.handeClose}>Close</button>
      </div>

  </div>
  ),document.body);
}
