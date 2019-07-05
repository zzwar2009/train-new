import React,{Component} from 'react';
import {Consumer} from './context';
import bindActionCreators from './bindActionCreators';
export default function (mapStateToProps,mapDispatchToProps) {
    return function (Component) {
        class Proxy extends Component{
            constructor(props) {
                super(props);
                this.state=mapStateToProps(props.store.getState());
            }
            componentDidMount() {
                this.unsubscribe=this.props.store.subscribe(() => {
                    this.setState(mapStateToProps(this.props.store.getState()));
                });
            }
            componentWillUnmount() {
                this.unsubscribe();
            }
            render() {
                let actions={};
                if (typeof mapDispatchToProps=='object') {
                    actions=bindActionCreators(mapDispatchToProps,this.props.store.dispatch);
                } else if(typeof mapDispatchToProps=='function'){
                    actions=mapDispatchToProps(this.props.store.dispatch);
                }
                return <Component dispatch={this.props.store.dispatch} {...this.state} {...actions}/>
            }
        }
        return () => (
            <Consumer>
                {
                    value => (
                        <Proxy store={value.store}/>
                    )
                }
            </Consumer>
        )
    }
}