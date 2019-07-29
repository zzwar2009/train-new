import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Tabs } from 'antd';
import 'antd/lib/tabs/style/index.css';


// import 'antd/dist/antd.css';
const { TabPane } = Tabs;
import './index.scss';

// import './test.css';

class SidebarExample extends React.Component {
  constructor(props) {
    super(props);
    this.newTabIndex = 0;
    const panes = [
      { title: 'default', content: 'Content of default', key: 'default',closable: false },
    ];
    const navConfig = [
        { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
        { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
        {
            title: 'Tab 3',
            content: <div><p>fsdf</p></div>,
            key: '3',
        },
    ];
   


       
    this.state = {
      activeKey: panes[0].key,
      panes,
      navConfig
    };
  }

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: `New Tab${this.newTabIndex}`, content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
  };

  remove = targetKey => {
    let { activeKey } = this.state;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
      } else {
        activeKey = panes[0].key;
      }
    }
    this.setState({ panes, activeKey });
  };

  addTab= (item) => {
    const {key,content,title} = item;

    const { panes } = this.state;
    const activeKey = key;
    let finded = panes.some(function(item){
        return item.key == key;
    })
    if(!finded){//已经打开tab就高亮 没打开要打开
        panes.push(item);
    }
    this.setState({ panes, activeKey });
  }

  render() {
    const {navConfig,activeKey} = this.state;
    let that = this;
    
    let navs = navConfig.map(function(item,i){
        let cls = activeKey == item.key ? 'active':'';
        return <li className={cls} onClick={function(){
            return that.addTab(item)
        }}>{item.title}</li>
    })
    return (<div className='main-wrap'>
       <div className='l-wrap'>
        <ul>
          {navs}
        </ul>   
       </div>
       <div className='r-wrap'>
       <div className='tabtest'>
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {this.state.panes.map(pane => (
              <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
          <div className='sepline'></div>
          </div>
       </div>  
      </div>
    )};
}
export default SidebarExample;
