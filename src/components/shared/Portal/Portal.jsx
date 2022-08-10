import { Component } from 'react'
import ReactDOM from 'react-dom'

// Use a ternary operator to make sure that the document object is defined
const root = typeof document !== `undefined` ? document.getElementById('___gatsby') : null;
if(root){
    let portalelement = typeof document !== `undefined` ? document.createElement('div', 'portal'): null;
    portalelement.id = "portal"
    root.parentNode.insertBefore(portalelement, root.nextSibling)
}
const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null

export default class Portal extends Component {

  constructor() {
    super()
    // Use a ternary operator to make sure that the document object is defined
    this.el = typeof document !== `undefined` ? document.createElement('div') : null
  }

  componentDidMount = () => {    
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el)
  }

  render() {
    const { children } = this.props

    // Check that this.el is not null before using ReactDOM.createPortal
    if (this.el) {
      return ReactDOM.createPortal(children, this.el)
    } else {
      return null
    }

  }
}