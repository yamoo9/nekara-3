/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    }

  }

  // 인스턴스 멤버
  prevCount = 0;

  handleCountUp = () => {
    // setState 메서드만으로 상태 업데이트 가능
    this.setState(this.state.count + 1, () => {
      this.prevCount = this.state.count;
    }); 
  }

  render() {
    return (
      <>
        <output onClick={this.handleCountUp}>{this.state.count}</output>
        <span>{this.prevCount}</span>
      </>
    )
  }
}

export default Counter;