import React, { Component } from 'react';
import './App.css';
import News from './News';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    //Toán tử 3 chấm
    // var p1 = {
    //   "name" : "A",
    //   "price" : 1000
    // }
    // var p2 = {...p1};
    // p2.name = "B";
    // console.log(p2);
    // console.log(p1);
    
    return (
      <div className="App">
        <header className="App-header">
          <News/>
          {this.props.num}
        </header>
      </div>
    );
  }
}
const  mapStateToProps = (state, ownProps) => {
  return {
    num: state.num
  }
}
export default connect(mapStateToProps)(App) ;
