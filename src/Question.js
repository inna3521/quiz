import React, { Component } from 'react'

const choiceNames = ['a', 'b', 'c', 'd', 'e']

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionState: 'unanswered',
      inputChecked: '',
    }
  }
  handleChange = (e) => {
    const val = e.target.id
    console.log('val', val)
    this.setState({
      inputChecked: val
    })
    console.log(e)
  }
  render() {
    const { tag } = this.props
    return (
      <div className="">
        <input
          id={`${tag}1`}
          type="radio"
          name={`${tag}`}
          value="a"
          onChange={(e) => this.handleChange(e)}
          checked={this.state.inputChecked === `${tag}1`}
        />
        <label htmlFor={`${tag}1`}>One-One</label><br/>

        <input
          id={`${tag}2`}
          type="radio"
          name={`${tag}`}
          value="b"
          onChange={(e) => this.handleChange(e)}
          checked={this.state.inputChecked === `${this.props.tag}2`}
        />
        <label htmlFor={`${tag}2`}>One-Two</label><br/>

        <input
          id={`${this.props.tag}3`}
          type="radio"
          name={`${tag}`}
          value="c"
          onChange={(e) => this.handleChange(e)}
          checked={this.state.inputChecked === `${this.props.tag}3`}
        />
        <label htmlFor={`${tag}3`}>One-Three</label><br/>

      </div>
    )
  }
}
export default Question
