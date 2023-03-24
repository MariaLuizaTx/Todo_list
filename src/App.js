import React, {Component} from 'react';
import Home from './components/Home';
import  * as S  from './components/styleGlobal';

class App extends Component{
render(){
  return (
    <>
      <S.GlobalStyle/>
      <Home/>
    </>
  )}
}

export default App;
