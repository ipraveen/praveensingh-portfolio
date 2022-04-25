import React from 'react';
import bits from 'assets/images/exp/bits.png';
import jiit from 'assets/images/exp/jiit.png';
import { Wrapper } from './Education.style';
import { Container } from 'components/common';

const Education = () => {
    return (
        <Container>
            <Wrapper>
                <section className="education">
                    <div className="container grid">
                        <section className="item card">
                            <h1>Master of Science (MS)</h1>
                            <h2>Software System</h2>
                            <img src={bits}></img>
                            <h3>Birla Institute of Technology and Science (BITS), Pilani</h3>
                            <h3>2011-2013</h3>
                        </section>
                        <section className="item card">
                            <h1>Bachelor of Technology (B.Tech.)</h1>
                            <h2>Electronics and communication</h2>
                            <img src={jiit}></img>
                            <h3>Jaypee Institute of Information Technology (JIIT), Noida</h3>
                            <h3>2003-2007</h3>
                        </section>
                    </div>
                </section>
            </Wrapper>
        </Container>
    );
};

export default Education;
