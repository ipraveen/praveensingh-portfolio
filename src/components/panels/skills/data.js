import { faUsers, faLaptopCode, faSitemap } from '@fortawesome/free-solid-svg-icons';

export const skills = [
    {
        id: 'id1',
        type: 'Engineering Lead',
        info: '7+ years of experience in leading teams.',
        icon: faUsers,
        style: {
            top: '0',
            left: '28rem',
            width: '300px',
        },
    },
    {
        id: 'id2',
        type: 'Frontend Engineer',
        info: 'micro-ui, JavaScript, React, TypeScript, etc',
        icon: faLaptopCode,
        style: {
            top: '12rem',
            left: '-4rem',
            width: '350px',
        },
    },
    {
        id: 'id3',
        type: 'Backend Engineer',
        info: 'micro-services, NodeJs, AWS, Kubernetes',
        icon: faSitemap,
        style: {
            top: '19rem',
            left: '26rem',
        },
    },
];
