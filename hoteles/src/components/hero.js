import React, { Fragment } from  'react';

class Hero extends React.Component{
    render (){  
        const {dateFrom, dateTo, country, price, rooms} = this.props.filters;

        return(
            <Fragment>
                <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">Hoteles</h1>
                    <h2 className="subtitle">
                        {country !== "0" ?  'en ' + country : ""} desde el <strong>{this.formatDate(dateFrom)}</strong> hasta el <strong>{this.formatDate(dateTo)}</strong> 
                        {price !== "0" ? ' por $' + price: ""} 
                        {rooms !== "0" ? ' y hasta ' + rooms + ' habitaciones.': ""}
                    </h2>
                    </div>
                </div>
                </section>
            </Fragment>
        )
    }

    
    formatDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
     
        if(typeof date !== "object"){
            var d = new Date(date + ' 00:00:00');
            
            var newDate = d.toLocaleDateString(undefined, options);

            return newDate;
        }

        return date.toLocaleDateString(undefined, options);
    }
}

export default Hero;