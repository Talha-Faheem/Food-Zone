import styled from 'styled-components';
function Buttons(props) {
    return <>
    <StyledButton onClick={()=>{props.change(props.Text)}}>{props.Text}</StyledButton>
    </>

    
}

export default Buttons;
const StyledButton  = styled.button`
  background-color: #ff4343; 
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  ` 
