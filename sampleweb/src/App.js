import React, {Component} from 'react';
import Navigation from './Components/Navigation/Navigation';
import ImageLinkForm from './Components/Images/ImageLinkForm';
import Particles from "react-tsparticles";
import Counter from './Components/Counter/Counter'
import './App.css';

const particleOptions = {
            fpsLimit: 60,
            interactivity: {
              detectsOn: "window",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "attract",
                },
                resize: true,
              },
              modes: {
                attract: {
                  distance  : 200,
                  duration  : 0.4,
                  easing  : "ease-out-quad",
                  factor  : 1,
                  maxSpeed  : 50,
                  speed : 5,
                }
              },
            },
            particles: {
              color: {
                value: "#030512",
              },
              links: {
                color: "#030512",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 1,
              },
            },
            detectRetina: true,
          }

class App extends Component {

  constructor() {
        super();
        this.state = {
            follow: true
        }
    }

  render(){
    return(
      <div className="App">
        <Particles
          id="tsparticles"
          className="particles"
          options={particleOptions}
        />
        <Navigation />
        <ImageLinkForm />
        <Counter />
{/*        <Logo />
        <FaceRecognition />*/}
      </div>
    )
  }
}

export default App;
