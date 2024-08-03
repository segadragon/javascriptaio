import React from "react";

class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }
  setVisibity() {
    this.setState({ visible: !this.state.visible });
  }
  render() {
    return (
      <div>
        {this.state.visible ? this.props.children : ""}
        <button onClick={this.setVisibity.bind(this)}>Show/Hide</button>
      </div>
    );
  }
}

export default ToggleVisibility;
