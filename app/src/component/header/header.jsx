import Button from "../button/button";
import styled from 'styled-components';

function Header({SearchValue,action} ) {

    function valueCahnge(e) {
        SearchValue(e.target.value);
        console.log(e.target.value);
    }
    return (
        <HeaderContainer>
            <TopContainer>
                <div className="image">
                <img src="/images/logo.svg" alt="" />
            </div>
            <div>
                <input onChange={(e)=>valueCahnge(e)} type="text" placeholder="Seacrh Food..."/>
            </div>
            </TopContainer>
            <div className="buttons">
                <Button change={action} Text="All" />
                <Button change={action}  Text="BreakFast" />
                <Button change={action}  Text="Lunch" />
                <Button change={action}  Text="Dinner" />
            </div>
        </HeaderContainer>
    );
}
export default Header;
const HeaderContainer = styled.div`
display: flex;
 flex-direction: column;
 align-items: center;
 gap: 30px;
 min-height: 20vh;
 margin-bottom: 20px;
 background-color: #323334;
 .buttons{
    display: flex;
    gap: 10px;

 }
`;
const TopContainer = styled.div`
 display: flex;
 justify-content: space-between;
 padding: 20px;
 min-width: 95vw;

 input{
 padding: 5px;
 border:2px solid #ff4343;
 background:transparent;
 color:white;
 }
`;