import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name, "child constructor!");
    this.state = {
      userInfo: {
        name: this.props.name,
        location: this.props.location,
      },
    };
  }
  async componentDidMount() {
    console.log(this.props.name, "child componentDidMount!");
    const data = await fetch("https://api.github.com/users/pallavigupta2");
    const json = await data.json();
    console.log('userinfo',json)
    this.setState({
      userInfo: json,
    });
  }
  render() {
    console.log(this.props.name, "child render!");
    const { name, location } = this.state.userInfo;
    return (
      <div className="about-us">
        <h1>Nmae:{name}</h1>
        <h2>Location:{location}</h2>
      </div>
    );
  }
}
export default UserClass;
