import React from 'react';
import { Wrapper } from './WorkExperience.style';

const Education = () => {
    return (
        <Wrapper>
            <section className="exp-showcase">
                <div className="container">
                    <div className="item card 2x">
                        <div className="logo">
                            <img src="images/exp/intuit.jpeg" />
                            <span className="bold">Feb 2020 – Present</span>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="item card">
                        <div className="logo">
                            <img src="images/exp/canva.png" />
                            <span>Sep 2019 – Jan 2020</span>
                        </div>
                    </div>

                    <div className="item card">
                        <div className="logo">
                            <img src="images/exp/intuit.jpeg" />
                            <span>Jan 2014 – Sep 2019</span>
                        </div>
                    </div>

                    <div className="item card">
                        <div className="logo">
                            <img src="images/exp/bt.jpeg" />
                            <span>Feb 2012 – Jan 2014</span>
                        </div>
                    </div>

                    <div className="item card">
                        <div className="logo">
                            <img src="images/exp/nokia.png" />
                            <span>Dec 2008 – Jan 2012</span>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

export default Education;
