import React from "react";

class App extends React.Component {
  state = {
    APIInfo: []
  };
  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then(resp => resp.json())
      .then(info => this.setState({ ApiInfo: info }));
  }

  render() {
    return <div> {this.state.APIInfo.map(people) => <p>{people.name}</p>}</div>;
  }
}

export default App;
