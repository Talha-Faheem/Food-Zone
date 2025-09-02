import styled from "styled-components";
import Card from "../card/card";
function Main({loaddata}) {
    return (
        <MainContainer>
            
                <Card loaddata={loaddata}></Card>

           
        </MainContainer>
    )   
}

export default Main;

const MainContainer = styled.div`
min-height: 80vh;
background-image: url("/images/bg.png");
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
padding: 20px;

`
