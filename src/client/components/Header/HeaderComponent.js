import React, { PropTypes } from 'react'
import imgHeader from 'assets/images/img-header.jpg'

export default function HeaderComponent ( props ) {
    return (
        <header className="Header">
            <div className="Header-info">
                <h1 className="Header-info__title">Welcome to Jimoto</h1>
                <img src={imgHeader} alt="image header" />
            </div>
        </header>
    )
}
