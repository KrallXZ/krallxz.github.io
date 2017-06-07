import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class Home extends React.Component {
    render() {
        return(
            <div>
                Just a first test.
            </div>
        )
    }
}

class Contact extends React.Component {
    render() {
        return(
            <div>Contact should be there.</div>
        )
    }
}

class Error404 extends React.Component {
    render() {
        return(
            <div>
                <h1>Error 404</h1>
                <p>Not Found</p>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <h1>Karol Syta</h1>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/contact" component={Contact} />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-wrapper'))