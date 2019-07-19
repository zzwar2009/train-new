import React, { Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import  {Provider,connect} from 'react-redux';
class Weather extends Component {
	constructor(props) {
      super(props);
  }

  componentWillMount(){
  }
  componentDidMount(){
  
  }
  componentWillUnmount(){
    
  }

  render() {
      let {weatherdata,city,getWeatherClick} = this.props;
      console.log(weatherdata)
      var arr = weatherdata.map( (item,i) => {
            return (<li key ={i}>
                <span>{item.day}</span>
                <span>{item.date}</span>
                <span>{item.week}</span>
                <span>{item.wea}</span>
            </li>)
        })
      return (
          <div className='main-wrap'>
            <p>{city}</p>
            <ul>
                {arr}
            </ul>
            <button onClick={getWeatherClick}>getWeatherClick</button>    
          </div>
      );
  }
}


function mapStateToProps(state){
  return state;
}
// Action Creator
const asyncgetWeatherAction = {type:'getWeather'}
function mapDispatchToProps(dispatch) {
  return {
    getWeatherClick: () => dispatch(asyncgetWeatherAction),
  }
}

let WeatherWrapComponent = connect(mapStateToProps,mapDispatchToProps)(Weather)
export default WeatherWrapComponent;