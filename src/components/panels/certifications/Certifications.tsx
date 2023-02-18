import React from 'react';
import * as style from './style.module.scss';

const Certifications = () => (
    <div className="container">
        <div className={style.wrapper}>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3">
                <section className="item card flex justify-center items-center flex-col">
                    <img src="/images/exp/scwcd.jpeg" alt="SCWCD" />
                    <h1>SCWCD</h1>
                    <h2>Sun Certified Web Component Developer.</h2>
                </section>
                <section className="item card flex justify-center items-center flex-col">
                    <img src="/images/exp/scjp.jpg" alt="SCJP" />
                    <h1>SCJP</h1>
                    <h2>Sun Certified Java Programmer.</h2>
                </section>
                <section className="item card flex justify-center items-center flex-col">
                    <img src="/images/exp/ibm.png" alt="IBM SOA" />
                    <h1>IBM SOA</h1>
                    <h2>IBM Service Oriented Architect.</h2>
                </section>
            </div>
        </div>
    </div>
);

export default Certifications;
