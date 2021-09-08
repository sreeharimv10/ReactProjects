import styled from '@emotion/styled'

const media = {desktop : '@media(min-width: 1000px)'}

export const ContentWrap =  styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    ${media.desktop}
            {
                width: 1000px;
            }
    
    h3
    {
        font-size: 20px;
        font-weight: bold;
        color: gray;
        margin-left: 24px;
        align-self: flex-start;
    }
    
    .cardbox
    {
        width: 90%;
        margin-bottom: 10px;

        ${media.desktop}
        {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: space-between;
        }
        .cardone
        {
            width: 100%;
            height: 170px;
            background-color: gray;

            ${media.desktop}
            {
                width: 48%;
            }
        }

        .cardtwo
        {
            margin-top: 10px;
            width: 100%;
            height: 170px;
            background-color: gray;
            ${media.desktop}
            {
                margin: 0;
                width: 48%;
            }
        }
    }
    `;

