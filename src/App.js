import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import {items} from './static-data';

class App extends Component{
  state = {
    activeTab:0,
    cart:[],
  }

  handleTabChange = (index) => {
    this.setState({
      activeTab:index
    })
  }

  handleAddToCart = (item) => {
    this.setState({
      cart:[...this.state.cart, item.id]
    })
  }

  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id)
    this.setState({
      cart:[...this.state.cart.slice(0,index), ...this.state.cart.slice(index+1)]
    })
  }

  renderCart(){
    //Count how many of each item is in the cart
    let itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});
    
    let cartItems = Object.keys(itemCounts).map(itemId => {
      let item = items.find (item => item.id === parseInt(itemId,10))

      return {
        ...item,
        count:itemCounts[itemId]
      }
    })

    return(
      <CartPage 
        items={cartItems}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveOne} />
    )
  }

  renderContent(){
    switch(this.state.activeTab){
      case 0: return <ItemPage items={items} onAddToCart={this.handleAddToCart}/>;
      case 1: return this.renderCart()
    }
  }

  render(){
    return(
      <div className="App">
        <div>
          {this.state.cart.length} items
        </div>
        <Nav 
          tab={this.handleTabChange}
          active={this.state.activeTab}/>
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    )
  }
}

export default App;
