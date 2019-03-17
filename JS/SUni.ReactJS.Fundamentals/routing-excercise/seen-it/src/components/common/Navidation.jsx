import React, {Component} from 'react';

export default class Navidation extends Component{
    render=()=>{
        return(
        <div id="menu">
            <div className="title">Navigation</div>
            <a className="nav" href="#">Catalog</a>
            <a className="nav" href="#">Submit Link</a>
            <a clasName="nav" href="#">My Posts</a>
        </div>
        )
    }
}