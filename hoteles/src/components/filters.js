import React,{Component} from 'react';
import DateFilter from './dateFilter';
import OptionsFilter from './optionsFilter';

export default class Filters extends Component {
    constructor(props){
        super(props);

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleDateChange(event) {
        let payload = this.props.filters;
        payload[event.target.name] = event.target.value
        
        this.props.handleFilterChange(payload)
    }

    handleOptionChange(event) {
        let payload = this.props.filters;
        payload[event.target.name] = event.target.value
        
        this.props.handleFilterChange(payload)
    }

    render() {
        const props = this.props;

        return (
            <nav className="navbar is-info" style={ {justifyContent: 'center'} }>
                <div className="navbar-item">
                    <DateFilter
                    date={ props.filters.dateFrom}
                    handleDateChange = {this.handleDateChange}
                    icon="sign-in-alt" 
                    name="dateFrom" />
                </div>
                <div className="navbar-item">
                    <DateFilter
                    date={ props.filters.dateTo }
                    handleDateChange = {this.handleDateChange}
                    icon="sign-out-alt" 
                    name="dateTo" />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Todos los países'}, {value: 'Argentina', name: 'Argentina'}, {value: 'Brasil', name: 'Brasil'}, {value: 'Chile', name: 'Chile'}, {value: 'Uruguay', name: 'Uruguay'} ] }
                    selected={ props.filters.country }
                    handleOptionChange = {this.handleOptionChange}
                    name="country"
                    icon="globe" />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Cualquier precio'}, {value: 1, name: '$'}, {value: 2, name: '$$'}, {value: 3, name: '$$$'}, {value: 4, name: '$$$$'} ] }
                    selected={ props.filters.price }
                    handleOptionChange = {this.handleOptionChange}
                    name="price"
                    icon="dollar-sign" />
                </div>
                <div className="navbar-item">
                    <OptionsFilter
                    options={ [ {value: undefined, name: 'Cualquier tamaño'}, {value: 10, name: 'Hotel pequeño'}, {value: 20, name: 'Hotel mediano'}, {value: 30, name: 'Hotel grande'} ] }
                    selected={ props.filters.rooms }
                    handleOptionChange = {this.handleOptionChange}
                    name="rooms"
                    icon="bed" />
                </div>
            </nav>
        );
    }
}