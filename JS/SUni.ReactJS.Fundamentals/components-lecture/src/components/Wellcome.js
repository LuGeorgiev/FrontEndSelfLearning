import React, { Component } from 'react';
import './Wellcome.css';
import Logo from './Logo';
import Button from './Button';
//import {Cat, Dog} from './Logo'; To import not only default but exactly what is needed

class Wellcome extends Component {
 render() {
     let title = this.props.title ||'Title';
     let subtitle = this.props.subtitle ||'Subtitle';

     return (
        <div className='Wellcome-main'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            < Logo />
            <br/>  
            <Button text="Clik pls!" />
        </div>
        )    
    }
}
export default Wellcome;