import React from 'react';
import { Container } from 'components/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper } from './Skills.style';
import { skills } from './data';

export default () => (
    <Container>
        <Wrapper>
            {skills.map(({ type, info, icon, animation }) => (
                <div className={'item card ' + animation }>
                    <h3 className="title">{type}</h3>
                    <FontAwesomeIcon icon={icon} size="4x" />
                    <p className="intro">{info}</p>
                </div>
            ))}
        </Wrapper>
    </Container>
);
