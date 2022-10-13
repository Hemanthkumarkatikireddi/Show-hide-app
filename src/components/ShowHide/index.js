// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {className1: '', name1: '', className2: '', name2: ''}

  onFirst = () => {
    const {className1, name1} = this.state
    if (className1 === '' && name1 === '') {
      this.setState(() => ({
        className1: 'name-box',
        name1: 'Joe',
      }))
    } else if (className1 !== '' && name1 !== '') {
      this.setState(() => ({
        className1: '',
        name1: '',
      }))
    }
  }

  onLast = () => {
    const {className2, name2} = this.state
    if (className2 === '' && name2 === '') {
      this.setState(() => ({
        className2: 'name-box',
        name2: 'Jonas',
      }))
    } else if (className2 !== '' && name2 !== '') {
      this.setState(() => ({
        className2: '',
        name2: '',
      }))
    }
  }

  render() {
    const {className1, name1, className2, name2} = this.state

    return (
      <div className="main-container">
        <div className="content-container">
          <div>
            <h1 className="heading">Show/Hide</h1>
          </div>

          <div className="card-container">
            <div className="button-container">
              <button className="button" type="button" onClick={this.onFirst}>
                Show/Hide Firstname
              </button>
              <div className="name-box-container">
                <p className={`${className1} `}>{name1}</p>
              </div>
            </div>
            <div className="button-container">
              <button className="button" type="button" onClick={this.onLast}>
                Show/Hide Lastname
              </button>
              <div className="name-box-container">
                <p className={`${className2}`}>{name2}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
