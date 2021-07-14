import React,{Component} from "react";
import Navigation from "./components/Navigation";
import Timeline from "./components/Timeline";

export default class App extends Component {
  render() {
      return (
          <div>
              <Navigation/>
              <Timeline/>
          </div>
      );
  }
}

