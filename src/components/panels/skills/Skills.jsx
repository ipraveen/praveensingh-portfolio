import React from 'react';
import Container from 'components/common/container/Container';
import { skills } from './data';
import * as styles from './skills.module.scss';
import Card from './Crad';

const Skill = () => (
    <Container>
        <div className={styles.skills}>
            <div className={styles.content}>
                <h1 className="panel-title">My Skills</h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum consequatur in sapiente aut corporis?
                    Delectus in nobis incidunt ducimus, quis velit hic enim? Dolores, ab porro fugiat libero harum
                    atque.
                </p>
            </div>

            <div className={styles.cards}>
                {skills.map(({ id, type, info, icon, style }) => (
                    <Card key={id} icon={icon} type={type} info={info} style={style} />
                ))}
            </div>
        </div>
    </Container>
);

export default Skill;
