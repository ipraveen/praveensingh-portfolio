import React from 'react';
import * as style from './style.module.scss';
import Card from 'components/parts/Card';
import { StaticImage } from 'gatsby-plugin-image';

const Certifications = () => (
    <div className="container">
        <div className={style.wrapper}>
            <div className="max-w-screen-xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-3">
                <Card className="item flex justify-center items-center flex-col">
                    <StaticImage className='w-36 h-24' src="../../../assets/images/scwcd.jpeg" alt="SCWCD" />
                    <h1>SCWCD</h1>
                    <h2>Sun Certified Web Component Developer.</h2>
                </Card>
                <Card className="item flex justify-center items-center flex-col">
                    <StaticImage src="../../../assets/images/scjp.jpg" alt="SCJP" />
                    <h1>SCJP</h1>
                    <h2>Sun Certified Java Programmer.</h2>
                </Card>
                <Card className="item flex justify-center items-center flex-col">
                    <img src="../../../assets/images/ibm.png" alt="IBM SOA" />
                    <h1>IBM SOA</h1>
                    <h2>IBM Service Oriented Architect.</h2>
                </Card>
            </div>
        </div>
    </div>
);

export default Certifications;
