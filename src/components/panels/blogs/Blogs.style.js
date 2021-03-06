import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 3rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .post.card {
        padding: 0;
        &:hover {
            transform: scale(1.02);
        }
    }
    .header {
        text-align: center;
    }
    .header1 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 300;
        letter-spacing: 0.2px;
        text-transform: uppercase;
    }
    .header2 {
        margin-top: 0.3rem;
        font-size: 1.4rem;
        font-weight: 500;
    }
    .slider {
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
        list-style: none;
    }
    .post {
        margin: 3rem 1rem;
        width: 30%;
        min-width: 300px;
        max-width: 600px;
        -webkit-box-shadow: 9px 9px 20px 0px rgba(0, 0, 0, 0.4);
        -moz-box-shadow: 9px 9px 20px 0px rgba(0, 0, 0, 0.4);
        box-shadow: 9px 9px 20px 0px rgba(0, 0, 0, 0.4);
    }
    .content {
        padding: 1rem;

        h2 {
            color: #867670;
            margin: 1rem 0;
            margin-top: 0;
        }
        p {
            color: #867670;
        }
    }
    .preview {
        font-size: 0.95rem;
        font-weight: 300;
    }
    .title {
        margin-top: 0;
        font-size: 1.4rem;
        margin-bottom: 0.5rem;
    }
    .intro {
        line-height: 1.5;
    }
    .info {
        font-weight: 300;
    }
    .date {
        font-size: 0.85rem;
    }
    .tags {
        position: absolute;
        bottom: 5px;
        left: 5px;
    }
`;
