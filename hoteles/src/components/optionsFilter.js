import React,{Component} from 'react';

export default class OptionsFilter extends Component {
    constructor(props){
        super(props);

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(event) {
        this.props.handleOptionChange(event)
    }

    render() {

        const {options, selected, icon, name} = this.props;
 
        return (
            <div className="field">
                <div className="control has-icons-left">
                    <div className="select" style={ {width: '100%'} }>
                    <select name={name} onChange={this.handleOptionChange} style={ {width: '100%'} } defaultValue={selected}>
                        {options.map((item)=>
                            <option key={item.name} value={item.value === undefined ? 0 : item.value}>{item.name}</option>
                        )}
                    </select>
                    </div>
                    <div className="icon is-small is-left">
                        <i className={'fas ' + 'fa-' + icon}></i>
                    </div>
                </div>
            </div>
        );
    }
}