import React, { Component } from 'react';

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  handleChange = evt => {
    this.setState({ /*inputValue: evt.target.value }*/ });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 28,
        gap: '18px', 
        color: '#010101',
      }}
      > goit-react-hw-02-feedback
            <div className='Statistics'>
            <h2 className='Please'>Please leave feedback</h2>


            </div>
    </div>
    );
  }
}
