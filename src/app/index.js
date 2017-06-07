import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import Contact from './contact'
import Home from './home'
import Offer from './offer'
import Portfolio from './portfolio'
import Error404 from './errors/404'
import 'bootstrap'
import './scss/style.scss'

class App extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <h1>Karol Syta</h1>
                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
                    <NavLink exact to="/offer" activeClassName="active">Offer</NavLink>
                    <NavLink exact to="/portfolio" activeClassName="active">Portfolio</NavLink>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/offer" component={Offer} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('react-wrapper'))