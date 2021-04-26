import React from 'react';
import bits from 'assets/images/exp/bits.png';
import jiit from 'assets/images/exp/jiit.png';
import { Container } from 'components/common';
import { Wrapper } from './Certifications.style';

const Education = () => (
    <Container>
        <Wrapper>
            <section className="certifications">
                <div className="container grid grid-3">
                    <section className="item card">
                        <img src="images/exp/scwcd.jpeg" alt="" />
                        <h1>SCWCD</h1>
                        <h2>Sun Certified Web Component Developer.</h2>
                    </section>
                    <section className="item card">
                        <img src="images/exp/scjp.jpg" alt="" />
                        <h1>SCJP</h1>
                        <h2>Sun Certified Java Programmer.</h2>
                    </section>
                    <section className="item card">
                        <img src="images/exp/ibm.png" alt="" />
                        <h1>IBM SOA</h1>
                        <h2>IBM Service Oriented Architect.</h2>
                    </section>
                </div>
            </section>
        </Wrapper>
    </Container>
);

export default Education;
