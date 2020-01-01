import React, { Component } from 'react';

const styles = {
  body: {
    backgroundColor: 'white',
    height: '100%',
  },
  wrapper: {
    padding: '20px 50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    overflow: 'hidden',
  },
  numberInput: {
    height: '30px',
    fontSize: '27px',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '5px',
    marginBottom: '10px',
    border: '1px solid lightgray',
  },
  keypadContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    height: '345px',
    flex: '0 0 auto',
    overflow: 'hidden',
  },
  numberButton: {
    height: '65px',
    width: '65px',
    borderRadius: '50px',
    border: '1px solid lightgray',
    flexGrow: '0 0 auto',
    textAlign: 'center',
    padding: '12px',
    fontSize: '27px',
    margin: '10px',
  },
  controlsContainer: {
    height: '75px',
    textAlign: 'center',
  },
  callButtonContainer: {
    paddingTop: '10px',
  },
  callButton: {
    backgroundColor: 'green',
    color: 'white',
    height: '75px',
    width: '75px',
    borderRadius: '40px',
    fontSize: '35px',
    textAlign: 'center',
    padding: '20px',
    cursor: 'pointer',
  },
};

class Phone extends Component {
  constructor() {
    super();
    this.state = {
      number: '',
    };
  }

  componentDidMount() {
    this.numberInput.focus();
  }

  onNumberPress(number) {
    this.setState({number: `${this.state.number}${number}`});
  }

  onTypeNumber(event) {
    this.setState({number: event.currentTarget.value});
  }

  render() {
    return (
      <div style={styles.body}>
        <div style={styles.wrapper}>
          <input
            style={styles.numberInput}
            value={this.state.number}
            placeholder={'Contact Number'}
            ref={ref => this.numberInput = ref}
            onChange={this.onTypeNumber.bind(this)}
          />
          <div style={styles.keypadContainer}>
            {[1,2,3,4,5,6,7,8,9,0].map(number => (
              <div
                onClick={() => this.onNumberPress(number)}
                key={number}
                style={styles.numberButton}
              >{number}</div>
            ))}
          </div>
          <div style={styles.controlsContainer}>
            <div style={styles.callButtonContainer}>
              <div style={styles.callButton} className={'fas fa-phone'}>
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Phone;
