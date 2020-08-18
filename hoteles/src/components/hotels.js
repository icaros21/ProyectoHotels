import React,{Component} from 'react';
import Hotel from './hotel';

export default class Hotels extends Component {

    render() {
        return (
            <section className="section" style={ {marginTop: '3em'} }>
                <div className="container">
                    <div className="columns is-multiline">
                        {
                            this.props.hotels.length !== 0 ? 
                            this.props.hotels.map((hotel) => 
                                <div className="column is-one-third" key={hotel.name}>
                                    <Hotel data={ hotel } />
                                </div>
                            )
                            :
                            <article className="message is-warning">
                                <div className="message-body">
                                    No se han encontrado hoteles que coincidan con los parámetros de búsqueda.
                                </div>
                            </article>
                        }
                    </div>
                </div>
            </section>
        );
    }
}