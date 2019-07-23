import React,{Component} from 'react';
import {Provider as P} from './context';
export default class Provider extends Component{
    render() {
        return (
            <P value={{store:this.props.store}}>
                {this.props.children}
            </P>
        )
    }
}