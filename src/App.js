import React, { Component } from "react";
import "./App.css";
import Card from './components/Card'
 
class App extends Component {

    card1 = {
        title: "Declarative",
        text: "React makes it painless to create interactive UIs.",
        image: "../images/icon1.png"
    }

    card2 = {
        title: "Components",
        text: "Build encapsulated components that manage their state",
        image: "../images/icon2.png"
    }

    card3 = {
        title: "Single-Way",
        text: "A set of immutable values are passed to the component's",
        image: "../images/icon3.png"
    }

    card4 = {
        title: "JSX",
        text: "Statically-typed, designed to run on modern browsers",
        image: "../images/icon4.png"
    }

  render() {
    return (
        <div className="App">
            <div className="topBody"> 

                <div className="nav">
                    <img src="./images/ironhack-logo.svg"/>
                    <img src="./images/menu-top.svg"/> 
                </div>

                <div className="info-logo">

                    <div className="introText">
                        <h1>Say hello to ReactJS</h1>
                        <p>You will learn now to use the most popular frontend library, and become a super Ninja developer</p>
                        <button>Awesome!</button>
                    </div>

                    <div className="logo">
                        <img class='react-logo'src="./images/react-logo.svg" alt="react" />
                        <img class='react-logo'src="./images/react-logo.svg" alt="react" />
                        <img class='react-logo'src="./images/react-logo.svg" alt="react" />
                    </div>

                </div>

            </div> 

            <div className="bottomBody">

                <div className="cards">
                    <Card image={this.card1.image} title={this.card1.title} text={this.card1.text}/>
                    <Card image={this.card2.image} title={this.card2.title} text={this.card2.text}/>
                    <Card image={this.card3.image} title={this.card3.title} text={this.card3.text}/>
                    <Card image={this.card4.image} title={this.card4.title} text={this.card4.text}/>
                </div>

            </div>

        </div>
    );
  }
}
 
export default App;