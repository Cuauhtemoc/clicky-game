import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from './components/Card';
import imageData from "./imageData";

class App extends Component {

state = {
  headerMessage: "Click on an image to start the game. If you click the game image twice you lose",
  gameMessage: "",
  score: 0,
  topScore: 0,
  images : imageData,
  gameOver: false
}
handleClick = (id) => {
 this.setState (prevState => {
   const updatedImages = prevState.images.map(img => {
    if(img.id === id && img.clicked === true)
    { 
      prevState.gameOver = true;
    } 
    else if(img.id === id) 
    {
        img.clicked = true;
    }
    return img;
   })
   return ({
     score: prevState.score + 1 ,
     images: updatedImages,
     gameMessage: "Correct"
    });
 })
 this.shuffle()
}
reset =() =>{
  this.setState (prevState => {
    const updatedImages = prevState.images.map(img => {
      img.clicked = false;
      return img
    })
    return ({
      score: 0,
      topScore: prevState.gameOver ? prevState.topScore : prevState.score,
      images: updatedImages,
      gameMessage: "Incorrect",
      gameOver: false
    })
  })
}
shuffle = () =>{
  let imgs = this.state.images
  let temp;
  let randomIndex;
  let currentIndex = imgs.length - 1;
  for (let i=0; i <= currentIndex; currentIndex--){
      randomIndex = Math.floor(Math.random() * imgs.length );
      temp = imgs[i];
      imgs[i] = imgs[randomIndex];
      imgs[randomIndex] = temp;
  }
  this.setState({images:imgs})
};

 render(){
  const images = this.state.images.map(img => {
    return <Card img={img} key={img.id} src={img.src} id={img.id} reset ={this.reset} handleClick={this.handleClick}/>
  })
  return (
  <div>
    <Navbar gameMessage={this.state.gameMessage} score ={this.state.score} topScore ={this.state.topScore}/>
    <Header headerMessage={this.state.headerMessage}/>  
    <div className="row mx-auto">
        {images}
    </div>
  </div>
  )
  }
}

export default App;
