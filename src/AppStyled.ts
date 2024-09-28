import styled from 'styled-components'

export const Topo = styled.div`
    background-color: black;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    h1 {
        color: white;
    }
`;

export const Texto = styled.p`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin: 10px;
    
`;

export const Container = styled.div`
    height: 430px;
    margin: 30px auto;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
`;

export const Tipo1 = styled.div`
    height: 430px;
    width: 430px;
    background-color: red;
    
`;

export const Tipo2 = styled.div`
    height: 430px;
    width: 430px;
    background-color: blue; 
    
`;