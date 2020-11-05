import styled from 'styled-components'

export const Notif = styled.div`
    display: flex;
    margin: 10px;
    border: 1px solid ${props => {
        if (props.color === 'danger') {
            return '#eb4034';
        }else if (props.color === 'success')
            return '#31e031';
        }
    };
    background: ${props => {
        if (props.color === 'danger') {
            return '#eb4034';
        }else if (props.color === 'success')
            return '#31e031';
        }
    };
    color: white;
    font-size: 13px;
    padding: 10px 40px 10px 10px;
    border-radius: 5px;
`;