import { Component } from 'react'
import { Card } from 'react-bootstrap'

class Movie extends Component {

    state = {
        currentMovie: {}, // the initial state
        isError: false
    }

    componentDidMount = async () => { // will ALWAYS happen once
        this.fetchData()
    }

    fetchData = async () => {
        try {
            let response = await fetch('http://www.omdbapi.com/?apikey=24ad60e9&s=' + this.props.selectedMovie)
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setState({
                    currentMovie: data.Search[0]
                })
            } else { // we'll fall here in a API error
                this.setState({
                    isError: true
                })
            }
        } catch (error) { // we'll probably end up here in a network error
            this.setState({
                isError: true
            })
        }
    }

    componentDidUpdate = async (previousProps, previousState) => {
        // part of the updating logic
        // it's going to be triggered every time there's a change in the STATE or in the PROPS
        // yeah, just like render
        console.log("I JUST GOT UPDATED")
        console.log("LET'S COMPARE PROPS", previousProps.selectedMovie, this.props.selectedMovie)
        console.log("LET'S COMPARE STATES", previousState, this.state)

        // WE WANT TO LISTEN TO A CHANGE IN THE PROPS
        // because a change in the props means that we selected a new movie
        // componentDidUpdate will do that!

        // but if we set the state into componentDidUpdate
        // we'll change the state of this component
        // and we'll enter componentDidUpdate AGAIN!!
        // and this is bad

        // we want to FETCH just if the previous movie in the dropdown
        // is DIFFERENT than the current movie

        if (previousProps.selectedMovie !== this.props.selectedMovie) {
            // this.props will always point to the CURRENT PROPS
            // if(man of steel !== wonder woman)
            // componentDidUpdate is dangerous!
            // always pull the handbrake and set a condition for your setState
            this.fetchData()
        }
    }

    render() {
        // we cannot put a setState here
        // it will trigger every time an infinite loop
        return (
            <>
                <h1>HERE COMES THE MOVIE</h1>
                <Card>
                    <Card.Img variant="top" src={this.state.currentMovie.Poster} />
                    <Card.Body style={{ color: 'black' }}>
                        <Card.Title>{this.state.currentMovie.Title}</Card.Title>
                        <Card.Text>
                            {this.state.currentMovie.Year}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Movie