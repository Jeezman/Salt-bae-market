import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, History } from 'react-router'; 
import { createHistory } from 'history';
import helpers from './helpers';


/*import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';

import App from './components/App';
import NotFound from './components/NotFound';
import StorePicker from './components/StorePicker';

Routes 
var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound } />
  </Router>
)

ReactDOM.render(routes, document.getElementById('main'));*/

/*App */
var App = React.createClass({

  render: function(){
    return (
      <div className="catch-of-the-day" >
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory/>
      </div>
    )
  }

});

// Add Fish form

var AddFishForm = React.createClass({

  createFish: function(event) {
    //stop the form fromm submitting
    event.preventDefault();

    //create object from form Data
    var fish = {
      name   : this.refs.name.value,
      price : this.refs.price.value,
      status : this.refs.status.value,
      desc : this.refs.desc.value,
      image : this.refs.image.value
    }

    console.log(fish);
    //add fish to app state
  },

  render: function() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref="name" placeholder="Fish Name"/>
        <input type="text" ref="price" placeholder="Fish Price"/>
        <select name="" ref="status" id="">
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="" ref="desc" placeholder="Desc" ></textarea>
        <input type="text" ref="image" placeholder="URL to Image" />
        <button type="Submit" >+ Add Item</button>
      </form>
    )
  }
})

/*Header*/
var Header = React.createClass({
  render: function (){
    // console.log(this)
    return (
      <header className="top" >
        <h1>Catch 
          <span className="ofThe">
            <span className="of">of</span> 
            <span className="the">the</span> 
          </span>
          Day</h1>
        <h3 className="tagline" ><span>{this.props.tagline}</span></h3>
      </header>
    )

  }
})

/*Inventory*/
var Inventory = React.createClass({
  render: function (){
    
    return (

      <div>
        <h2>Inventory</h2>

        <AddFishForm/>
      </div>
    )

  }
})


/*Order*/
var Order = React.createClass({
  render: function (){
    
    return (
      <p>Header</p>
    )

  }
})


// StorePicker

var StorePicker = React.createClass({
  mixins: [History],
  goToStore: function (event) {
    event.preventDefault();
    //get Data from input
    var storeId = this.refs.storeId.value;

    //transition from storepicker to app
    this.history.pushState(null, '/store/' + storeId);
  },

  render: function() {
    return (
      <form className='store-selector' onSubmit={this.goToStore} >
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={helpers.getFunName()} required />
        <input type="Submit"/>
      </form>
    )
  }
});

/**
 * not found
 */
var NotFound = React.createClass({
  render: function() {
    return (
      <h1>Not Found!</h1>
    )
  }
})

 

/*
Routes
*/

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={StorePicker}/>
    <Route path="/store/:storeId" component={App}/>
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.getElementById('main'));
