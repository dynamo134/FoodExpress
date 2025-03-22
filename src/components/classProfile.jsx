class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
    }
    
    componentDidMount() {
        //API call
        console.log("Component Did Mount");
    }

  render() {
    console.log("Render");
    return (
      <div>
        <h2>Profile Class Component</h2>
        <h2>Name : {this.props.name}</h2>
        <h3>Count : {this.state.count}</h3>
        <button
          onClick={() => {
            //we never mutate the state directly
            //this.state.count = 1; //this is wrong
            this.setState({ count: 1 });
          }}
        ></button>
      </div>
    );
  }
}

//First constructor and then render method will be called -> Component Did Mount
