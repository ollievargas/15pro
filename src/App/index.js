import React, {Component} from 'react';
import './App.css';
import Layout from './Layout';
import AppBar from './AppBar';
import {Provider} from './Provider';
import Settings from '../Settings';
import Content from '../Shared/Content';


class App extends Component {
  render() {
    return (
      <Layout>
        <Provider>
          <AppBar/>
          <Content>
            <Settings />
          </Content>
        </Provider>
      </Layout>
      
    );
  }
}

export default App;
