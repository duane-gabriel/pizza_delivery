import React from 'react';
import styled, { css } from 'styled-components';
import image1 from '../assets/images/1.png';

function OrderCard({ order, index }) {
  return (
    <Container>
      <Header>
        <OrderTitle>
          Pedido <span>#{index + 1}</span> - {order.client}
        </OrderTitle>
        <Time>{order.time}</Time>
        <OrderPrice>R${order.price}</OrderPrice>
      </Header>
      <Line />
      <Orders>
        {order.orders.map((o) => {
          return (
            <OrderBox>
              <img src={image1} alt='Pizza' />
              <div>
                <h4>{o.name}</h4>
                <small>Tamanho {o.size}</small>
              </div>
            </OrderBox>
          );
        })}
      </Orders>
      <Line />
      <Observations>Observações: {order.observations}</Observations>
    </Container>
  );
}

export default OrderCard;

const Orders = styled.div`
  margin: unset !important;
  display: flex !important;
  justify-content: flex-start;
  height: 100px;
  align-items: center;
`;

const Container = styled.div`
  margin: 0 auto;
  max-height: 270px;
  max-width: 650px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  background: white;
  border-radius: 5px;
  padding: 1.5rem;
`;

const Header = styled.div`
  h3 {
    font-family: Helvetica;
    font-size: 18px;
    color: #0b2031;
    letter-spacing: 0;
    text-align: left;
  }
`;

const OrderTitle = styled.h3`
  font-weight: normal;

  span {
    font-weight: bold;
  }
`;

const Time = styled.small`
  margin-top: 0.2rem;
  color: #706e7b;
  font-family: Helvetica;
  font-size: 11px;
`;

const OrderBox = styled.div`
  height: 80px;
  width: 200px;
  border: 1px solid #f8f9fa;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  
  img {
    max-height: 100%;
  }
  
  div {
    margin-left: 10px;
    h4 {
      font-size: 13px;
      color: #0b2031;
      letter-spacing: 0;
      font-family: Helvetica;
    }
    small {
      font-family: Helvetica;
      font-size: 11px;
      color: #706e7b;
      letter-spacing: 0;
      line-height: 10.77px;
      text-align: left;
    }
  }
`;

const OrderPrice = styled.h4`
  font-family: Helvetica;
  font-size: 20px;
  color: #0b2031;
  letter-spacing: 0;
  font-weight: bold;
  margin-top: 0.3rem;
  /* margin-bottom: 0.3rem; */
`;

const Observations = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  color: #706e7b;
  letter-spacing: 0;
  text-align: left;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: #f8f9fa;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;