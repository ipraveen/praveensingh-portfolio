import React from 'react';
import Container from 'components/common/container/Container';
import SocialList from 'components/common/social/SocialList';
import boy from 'assets/images/praveen.png';
// import glassesimoji from 'assets/images/glassesimoji.png';
// import thumbup from 'assets/images/thumbup.png';
// import crown from 'assets/images/crown.png';
import * as style from './introBanner.module.scss';

function IntroBanner() {
    return (
        <div className={style.introBanner}>
            <Container className={style.intro}>
                <section className={style.content}>
                    <h3 className="panel-title">Hi! I Am</h3>
                    <h1 className="panel-title">Praveen Singh</h1>
                    <p>
                        A Full Stack JavaScript Engineer and Engineering Lead with 15 years of industry experience and 8
                        years of leading a team.
                    </p>
                    <SocialList />
                </section>
                <section className={style.avatar}>
                    <div>
                        <img src={boy} alt="" />
                    </div>
                </section>
            </Container>
        </div>
    );
}

export default IntroBanner;
