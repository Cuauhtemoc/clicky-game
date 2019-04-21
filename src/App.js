import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from './components/Card';
import imageData from "./imageData";
class App extends Component {

state = {
  images : imageData
}
handleClick = (id) => {
 this.setState = (prevState) => {
   const updatedImages = prevState.images.map(img => {
      if(img.id === id) {
        img.clicked = true;
     }
     return img;
   })
   return ({
     images: updatedImages
    });
 }
}
 render(){
  const images = this.state.images.map(img => {
    return <Card key={img.id} src={img.src} id={img.id} handleClick={this.handleClick}/>
  })
  return (
  <div>
    <Navbar message="Correct" score ={1} topScore ={2}/>
    <Header />  
    {images}
  </div>
  )
  }
}

export default App;
