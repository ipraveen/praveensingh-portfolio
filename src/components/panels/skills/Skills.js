import React, { useEffect, useState } from 'react';
import { Wrapper } from './Skills.style';
import { skills } from './data';
import { Container } from 'components/common';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => {
    return (
        <Container>
            <Wrapper>
                {skills.map(({ type, info, icon }) => {
                    return (
                        <div className="item card">
                            <h3 className="title">{type}</h3>
                            <p className="intro">{info}</p>
                        </div>
                    );
                })}
            </Wrapper>
        </Container>
    );
};
