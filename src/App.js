import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './component/MainMenu'
import PageBody from './component/PageBody'

class App extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state = {page:'home'};
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
          handlePageChange={this.handlePageChange} />
        <PageBody
          page={this.state.page} >
        </PageBody>
      </div>
    );
  }
}

export default App;
