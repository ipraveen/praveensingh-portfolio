import React from 'react';
import * as style from './style.module.scss';

const Certifications = () => (
    <div className="container">
        <div className={style.wrapper}>
            <div className="container grid grid-3 grid-sm-1">
                <section className="item card">
                    <img src="images/exp/scwcd.jpeg" alt="SCWCD" />
                    <h1>SCWCD</h1>
                    <h2>Sun Certified Web Component Developer.</h2>
                </section>
                <section className="item card">
                    <img src="images/exp/scjp.jpg" alt="SCJP" />
                    <h1>SCJP</h1>
                    <h2>Sun Certified Java Programmer.</h2>
                </section>
                <section className="item card">
                    <img src="images/exp/ibm.png" alt="IBM SOA" />
                    <h1>IBM SOA</h1>
                    <h2>IBM Service Oriented Architect.</h2>
                </section>
            </div>
        </div>
    </div>
);

export default Certifications;
