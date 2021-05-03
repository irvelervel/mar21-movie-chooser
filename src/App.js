import { Component } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Movie from './components/Movie'

// functional components are useful for simple elements in the page
// they can work with props, but they have no simple access the their state
// and they have no simple access to the lifecycle methods

// classes are more feature-rich components
// they can access the state and the lifecycle methods easily

// CONSTRUCTOR
// here is where our state gets initially assigned
// RENDER (first)
// COMPONENTDIDMOUNT

// COMPONENTDIDUPDATE
// COMPONENTWILLUNMOUNT

class App extends Component {
  // constructor(props) {
  //   // constructor is just part of the MOUNTING process
  //   // it's actually the VERY FIRST method that comes into play
  //   // it's rarely used
  //   super(props) // super() is invoking the constructor of Component
  //   console.log('CONSTRUCTOR')
  //   // this.state = {
  //   //   name: 'Stefano',
  //   // }
  //   // the most useful feature for the constructor
  //   // is for BINDING the THIS to not-arrow functions
  //   this.output = this.output.bind(this)
  //   // if you just use arrow functions, probably there's no point
  //   // of having a constructor at all
  // }

  state = {
    // NO DIFFERENCE
    movieTitle: 'Wonder Woman', // the initial state
  }

  // componentDidMount() {
  // it's the perfect place for every expensive operation you want to perform in your component
  // we can do fetches here
  // }

  // output = () => {
  //   // arrow functions automatically take in
  //   // a reference to the current this
  //   console.log('output')
  //   this.setState({ name: 'Diego' })
  // }

  // we need to use render(), the only mandatory method
  render() {
    console.log("I'm in the render")
    // it's going to be fired initially
    // it's going also to be fired again every time there's a change in the state or in the props
    return (
      <div className="App">
        {/* <p onClick={this.output}>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
        <Container>
          <Row>
            <Col className="mt-4" md={{ span: 6, offset: 3 }}>
              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Choose your movie!</Form.Label>
                  <Form.Control
                    as="select"
                    value={this.state.movieTitle}
                    onChange={(e) => this.setState({ movieTitle: e.target.value })}
                  >
                    <option>Batman Begins</option>
                    <option>Wonder Woman</option>
                    <option>Man of Steel</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4" md={{ span: 6, offset: 3 }}>
              <Movie selectedMovie={this.state.movieTitle} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
