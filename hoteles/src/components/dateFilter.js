import React,{Component} from 'react';

export default class DateFilter extends Component {
    constructor(props){
        super(props);

        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(event){
        this.props.handleDateChange(event);
    }

    render() {
        const {date, icon, name} = this.props;

        return (
            <div className="field">
                <div className="control has-icons-left">
                    <input className="input" type="date" name={name} value={date} onChange={this.handleDateChange}/>
                    <span className="icon is-small is-left">
                        <i className={icon === 'sign-in-alt' ? 'fas ' + 'fa-' + icon: 'fas ' + 'fa-'+icon}></i>
                    </span>
                </div>
            </div>
        );
    }
}