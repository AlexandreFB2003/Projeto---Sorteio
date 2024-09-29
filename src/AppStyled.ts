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
    background-color: gray;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Tipo2 = styled.div`
    height: 430px;
    width: 430px;
    background-color: gray;
    border-radius: 10px; 
    
`;

export const Result = styled.div`
    height: 60%;
    width: 430px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    
    .resultado {
        background-color: white;
        width: 150px;
        height: 50px;
        border-radius: 10px;
        margin-bottom: 20px;
    }

    p {
        font-size: 30px;
        margin: 0px;
    };

    button {
        border-radius: 10px;
        font-size: 25px;
        padding: 5px;
    };
`;

export const Parametros = styled.div`
    height: 40%;
    width: 430px;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: center;
    
    input {
        width: 50px;
        height: 30px;
        margin: 5px;
        margin-bottom: 20px;
        border-radius: 10px;
    };

    p {
        font-size: 25px;
    };
`;