import React from 'react';
import ReactDOM from 'react-dom';

// CAN HAVE STATE
// class App extends React.Component {
//   render(){
//     return <h1>Hello Guys</h1>
//     OR
//     return React.createElement('h1', null, 'Hello')
//   }
// }


// STATELESS FUNCTION
// const App = () => <h1>Hello Eggheads</h1>


// ONLY ONE NODE CAN BE RETURNED BY A COMPONENT?
// class App extends React.Component {
//   render(){
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <b>Bold</b>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
//   render(){
//     let txt = this.props.txt
//     return <h1>{txt}</h1>
//   }
// }

// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: 'this is the default txt'
// }

// ---------------------------

// ReactDOM.render(
//   <App cat={5} txt="this is the props text" />,
//   document.getElementById('app')
// );

// ---------------------------

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { txt: '' }
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({txt: e.target.value })
//   }
//   render(){
//     return (
//       <div>
//       <input type="text"
//         onChange={this.update} />
//       <h1>{this.state.txt}</h1>
//       </div>
//     );
//   }
// }

// ---------------------------

// OWNER or COMPOSITE COMPONENT
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { txt: '' }
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({txt: e.target.value })
//   }
//   render(){
//     return (
//       <div>
//         <Widget txt={this.state.txt} update={this.update}/>
//         <Widget txt={this.state.txt} update={this.update}/>
//         <Widget txt={this.state.txt} update={this.update}/>
//       </div>
//     );
//   }
// }

// OWNEE

// const Widget = (props) => {
//   return (
//       <div>
//       <input type="text"
//         onChange={props.update} />
//       <h1>{props.txt}</h1>
//       </div>
//     );
// }

// ----------------------------------

// OWNER/OWNEE WITH SLIDER
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = { 
//       red: 0,
//       green: 0,
//       blue: 0 }
//     this.update = this.update.bind(this)
//   }
//   update(e){
//     this.setState({
//       red: ReactDOM.findDOMNode(this.refs.red).value,
//       green: ReactDOM.findDOMNode(this.refs.green).value,
//       blue: ReactDOM.findDOMNode(this.refs.blue).value
//     })
//   }
//   render(){
//     return (
//       <div>
//         <Slider ref="red" update={this.update} />
//         {this.state.red}
//         <br />
//         <Slider ref= "green" update={this.update} />
//         {this.state.green}
//         <br />
//         <Slider ref="blue" update={this.update} />
//         {this.state.blue}
//         <br />
//       </div>
//     );
//   }
// }

// class Slider extends React.Component {
//   render(){
//     return (
//       <input type="range"
//         min="0"
//         max="255"
//         onChange={this.props.update} />
//     )
//   }
// }

// class App extends React.Component {
//   render(){
//     return <Button>I <Heart/> React</Button>
//   }
// }

// class Button extends React.Component {
//   render(){
//     return <button>{this.props.children}</button>
//   }
// }

// const Heart = () => <span className="glyphicon glyphicon-heart"></span>

class App extends React.Component {
  constructor(){
    super();
    this.state = { val: 0 };
    this.update = this.update.bind(this);
  }
  update(){
    this.setState({val: this.state.val + 1})
  }
  componentWillMount() {
    console.log('mounting')
    this.setState({m: 2})     
  }
  render(){
    console.log('rendering');
    return (
      <button onClick={this.update}>
        {this.state.val * this.state.m}
      </button>
    )
  }
  componentDidMount() {
    console.log('mounted')     
    console.log(ReactDOM.findDOMNode(this));
    this.inc = setInterval(this.update,500)
  }
  componentWillUnmount() {
    clearInterval(this.inc)
  }
}

class Wrapper extends React.Component {
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    )
  }
}


export default Wrapper