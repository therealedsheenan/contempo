import React, { PropTypes } from 'react'
// import HeaderComponent from '../Header/HeaderComponent'

export default function ActivityComponent ( props ) {
    return (
        <section className="Activity">
            <div>
                <h1>This is English</h1>
                <h4>English locale</h4>
            </div>
            <figure className="Acitivity-figure">
                <img src="https://unsplash.it/200" />
            </figure>

            <div className="Activity-content">
                <header className="Acitivity-info">
                    <h2 className="Activity-info__owner">Lorem Ipsum!!!</h2>
                    <p className="Activity-info__title">Miso Soup & Gyoza</p>
                    <p className="Activity-info__date">17:00</p>
                </header>
                <div className="Activity-avail">
                    <div className="">
                    </div>
                </div>
            </div>
        </section>
    )
}
