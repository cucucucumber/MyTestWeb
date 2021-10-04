import React, {Component} from 'react';
import ReactCanvasNest from 'react-canvas-nest';
import Navigation from './Components/Navigation/Navigation';
import ImageLinkForm from './Components/Images/ImageLinkForm';
import Counter from './Components/Counter/Counter'
import "@lottiefiles/lottie-player";
import './App.css';

class App extends Component {
  constructor() {
        super();
        this.state = {
            follow: true
        }
    }

  render(){
    const { follow } = this.state;
    return(
      <div>
          <Navigation />
          <lottie-player
          autoplay
          loop
          background="transparent"
          src="https://assets3.lottiefiles.com/packages/lf20_fu0dfaqu.json"
          style={{width: '150px', height: '150px'}}
        ></lottie-player>
        <ImageLinkForm />
        <Counter />
        {/*<ReactCanvasNest />*/}
{/*        <Logo />
        <FaceRecognition />*/}
      </div>
    )
  }
}

export default App;
