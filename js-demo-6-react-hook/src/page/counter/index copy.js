import React,{useState} from 'react';
class Counter extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          number: 0
      };
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
// function Counter2(){
//   const [number,setNumber] = useState(0);
//   return (
//       <>
//           <p>{number}</p>
//           <button onClick={()=>setNumber(number+1)}>+</button>
//       </>
//   )
// }

function Counter2(){
  const [number,setNumber] = useState(0);
  function alertNumber(){
    setTimeout(()=>{
      alert(number);
    },3000);
  }
  return (
      <>
          <p>{number}</p>
          <button onClick={()=>setNumber(number+1)}>+</button>
          <button onClick={alertNumber}>alertNumber</button>
      </>
  )
}
export default Counter2;
