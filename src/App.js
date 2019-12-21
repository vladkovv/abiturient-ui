import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './component/MainMenu'
import PageBody from './component/PageBody'

class App extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state = {
      page:'home',
      //host:'http://localhost:3000',
      host: 'http://35.228.127.63:3000',
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(page){
    this.setState({page:page});
  }

  render(){
    return (
      <div className="App">
        <MainMenu 
          page={this.state.page}
          handlePageChange={this.handlePageChange}
          host={this.state.host} />
        <PageBody
          page={this.state.page}
          host={this.state.host} >
        </PageBody>
      </div>
    );
  }
}

export default App;
