import React, { Fragment, Component } from 'react';
import '../App.css';
import Hero from '../components/hero';
import Filters from '../components/filters';
import Hotels from '../components/hotels';
import {hotelsData} from  '../scripts/data';

class App extends Component{
  constructor(){
    super();

    const today = new Date();

    this.handleFilterChange = this.handleFilterChange.bind(this);

    this.state = {
        filters : {
          dateFrom: undefined, // Proviene del archivo data.js
          dateTo: undefined,
          country: "0",
          price: "0",
          rooms: "0"
        },
        hotels: hotelsData,
    }
  }

  handleFilterChange(payload) {
    this.setState({
      filters: payload
    });

    let hotelsFilter = hotelsData;

    
    if(this.state.filters.country !== "0")
      hotelsFilter = hotelsFilter.filter((item)=> item.country === this.state.filters.country);

    if(this.state.filters.price !== "0")
      hotelsFilter = hotelsFilter.filter((item)=> item.price === Number.parseInt(this.state.filters.price));

    if(this.state.filters.rooms !== "0")
    {
      switch (this.state.filters.rooms){
        case "10":
          hotelsFilter = hotelsFilter.filter((item)=> item.rooms >=1 && item.rooms <= Number.parseInt(this.state.filters.rooms));
          break;
        case "20":
          hotelsFilter = hotelsFilter.filter((item)=> item.rooms >=11 && item.rooms <= Number.parseInt(this.state.filters.rooms));
          break;
        case "30":
          hotelsFilter = hotelsFilter.filter((item)=> item.rooms >= Number.parseInt(this.state.filters.rooms));
          break;
      }
    }

    if(this.state.filters.dateFrom !== undefined && this.state.filters.dateFrom !== "")
      hotelsFilter = hotelsFilter.filter((item)=>  {
        return item.availabilityFrom >= new Date(this.state.filters.dateFrom + ' 00:00:00').getTime()
      });

    if(this.state.filters.dateTo !== undefined && this.state.filters.dateTo !== "")
      hotelsFilter = hotelsFilter.filter((item)=>  {
        return item.availabilityTo <= new Date(this.state.filters.dateTo + ' 00:00:00').getTime()
      });
    

    if(this.state.filters.country === "0" && this.state.filters.price === "0" && this.state.filters.rooms === "0" && this.state.filters.dateFrom === undefined && this.state.filters.dateTo === undefined)
      hotelsFilter = hotelsData;

    this.setState({
      hotels : hotelsFilter
    });
  }

  render(){
    return (
      <Fragment>
        <Hero filters = {this.state.filters} />
        <Filters filters = {this.state.filters} handleFilterChange={this.handleFilterChange}/>
        <Hotels hotels={this.state.hotels}/>
      </Fragment>
    )
  }
}

export default App;
