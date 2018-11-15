import React, { Component } from 'react';
import Header from './header'
import Footer from './footer'
import Bodycontent from './bodycontent'
class Home extends Component {
   render() {
      return (
         <div>
            <Header/>
            <Bodycontent/>
            <Footer/>
           {/* <h1><center> Reactjs crud app </center></h1> */}
         </div>
      );
   }
}
export default Home;