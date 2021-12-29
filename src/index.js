import ReactDOM from "react-dom";
import React, { Component } from "react";

import Tabs from "./Tabs/Tabs";
import Panel from "./Tabs/Panel";
import Carpets from "./Carpets/Carpets";
import Plots from "./Plots/Plots";
import IntroPopup from "./PopUps/IntroPopUp";
import AboutPopup from "./PopUps/AboutPopUp";

import "./styles.css";
import "./styles/output.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      componentData: [],
      compFigures: [],
      carpetFigures: [],
      info: "",
      showIntroPopup: true,
      showAboutPopup: false,
      originalData: [],
    };
  }

  toggleIntroPopup() {
    if (this.state.componentData.length !== 0) {
      this.setState({
        showIntroPopup: !this.state.showIntroPopup,
      });
    }
  }

  toggleAboutPopup() {
    this.setState({
      showAboutPopup: !this.state.showAboutPopup,
    });
  }

  callbackFunction = (childData) => {
    this.setState({ componentData: childData[2] });
    this.setState({ componentFigures: childData[0] });
    this.setState({ carpetFigures: childData[1] });
    this.setState({ info: childData[3] });
    this.setState({ originalData: childData[4] });
  };

  render() {
    return (
      <div className="main-container">
        {this.state.showIntroPopup ? (
          <IntroPopup
            callBack={this.callbackFunction}
            closePopup={this.toggleIntroPopup.bind(this)}
          />
        ) : null}
        {this.state.showAboutPopup ? (
          <AboutPopup
            callBack={this.callbackFunction}
            closePopup={this.toggleAboutPopup.bind(this)}
          />
        ) : null}
        <Tabs
          toggleIntroPopup={this.toggleIntroPopup.bind(this)}
          toggleAboutPopup={this.toggleAboutPopup.bind(this)}
        >
          <Panel title="Info" icon="info-circle">
            <p className="info">{this.state.info}</p>
          </Panel>
          <Panel title="ICA" icon="chart-pie">
            <Plots
              componentData={this.state.componentData}
              componentFigures={this.state.componentFigures}
              originalData={this.state.originalData}
            />
          </Panel>
          <Panel title="Carpets" icon="layer-group">
            <Carpets images={this.state.carpetFigures} />
          </Panel>
        </Tabs>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
