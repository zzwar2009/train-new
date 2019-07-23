import React,{useState,memo,useCallback,useMemo} from 'react';
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        number: 0
      };
    }

    componentDidMount() {
        document.title = `你点击了${this.state.number}次`;
    }

    componentDidUpdate() {
        document.title = `你点击了${this.state.number}次`;
    }

    render() {
      return (
        <div>
          <p>{this.state.number}</p>
          <button onClick={() => this.setState({ number: this.state.number + 1 })}>
            +
          </button>
        </div>
      );
    }
  }
  export default Counter;
  //修改标题