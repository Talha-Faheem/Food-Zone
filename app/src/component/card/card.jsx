import styled from "styled-components";
import { URL } from "../../App";
import Button from "../button/button";

function Card({ loaddata }) {
  return (
    <Container>
        {loaddata && loaddata.map((item) => (
      <Cards key={item.name}>
        <img
          src={URL + item.image}
          alt={item.name}
          width="133px"
          height="133px"
        />
        <div>
          <h4>{item.name}</h4>
          <p className="info">{item.text}</p>
          <div className="price">
            <Button Text={`$ ${item.price}`}></Button>
          </div>
        </div>
      </Cards>
    ))}
    </Container>
  );
}

export default Card;

const Cards = styled.div`
  display: flex;
  max-width: 340px;
  position: relative;
  height: 167px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px) saturate(70%);
  -webkit-backdrop-filter: blur(12px) saturate(120%);

  h4 {
    font-size: 16px;
    font-weight: 600;

    height: 19px;
  }
  .info {
    width: 133px;
    height: 38px;
    font-size: 12px;
  }
  div {
    width: 168px;
    height: 86px;
    display: flex;
    gap: 10px;
    flex-direction: column;
  }
  .price {
    width: 57px;
    height: 27px;
    background: #ff4343;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    position: absolute;
    bottom: 15px;
    right: 10px;
  }
`;

const Container = styled.div` 
display: flex;
flex-wrap: wrap;
gap: 20px;
max-width: 1060px;
justify-content: center;

` 
