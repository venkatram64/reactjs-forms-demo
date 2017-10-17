var React = require('react');
var ReactDOM = require('react-dom');

var Popular = require('./Popular');

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');


//state
//lifecycle event
//UI

class App extends React.Component {

    render(){
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Route path='/popular' component={Popular}/>
                </div>
            </Router>
        )
    }
}


module.exports = App;