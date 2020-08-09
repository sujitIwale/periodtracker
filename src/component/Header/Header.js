import React, { Component } from 'react';
import './Header.css';

 class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='menu'>
                    <ul className='list'>
                        <li><h3>Period Tracker</h3></li>
                    </ul>
                </div>  
            </div>
        )
    }
}

export default Header;
