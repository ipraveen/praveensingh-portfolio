import React from 'react';
import { Wrapper } from './SkillsMap.style';

const Education = () => {
    return (
        <Wrapper>
            <section className="skills">
                <div className="container">
                    <div className="skills-section">
                        <div className="skills-container">
                            <div className="skills-group">
                                <div className="skills-item card">
                                    <img src="/images/skills/redux.png" /> <b>Redux</b>
                                </div>
                            </div>

                            <div className="skills-group">
                                <div className="skills-item card">
                                    <img src="/images/skills/node.png" width="120px" /> <b>Node</b>
                                </div>
                                <div className="skills-item card">
                                    <img src="/images/skills/ds.png" width="128px" />
                                    <b>Data Structure</b>
                                </div>
                            </div>

                            <div className="skills-group">
                                <div className="skills-item card">
                                    <img src="/images/skills/react-96.png" width="96px" />
                                    <b>React</b>
                                </div>
                                <div className="skills-item card">
                                    <img src="/images/skills/js-96.png" width="96px" />
                                    <b>JavaScript</b>
                                </div>
                                <div className="skills-item card">
                                    <img src="/images/skills/ts.png" width="64px" />
                                    <b>TypeScript</b>
                                </div>
                            </div>
                            <div className="skills-group">
                                <div className="skills-item card">
                                    <img src="/images/skills/java.png" width="96px" />
                                    <b>Java</b>
                                </div>
                                <div className="skills-item card">
                                    <img src="/images/skills/spring.png" width="96px" /> <b>Spring</b>
                                </div>
                            </div>
                            <div className="skills-group">
                                <div className="skills-item card">
                                    <img src="/images/skills/aws.png" width="96px" /> <b>AWS</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

export default Education;
