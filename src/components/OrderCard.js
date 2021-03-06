import React from 'react';
import { differenceInMinutes, parseISO } from 'date-fns';
import styled, { css } from 'styled-components';
import calabresa from '../assets/images/calabresa.png';
import pepperoni from '../assets/images/pepperoni.png';
import atum from '../assets/images/atum.png';
import queijo from '../assets/images/queijo.png';
import portuguesa from '../assets/images/portuguesa.png';
import brocolis from '../assets/images/brocolis.png';

function OrderCard({ order, index, handleOrderStage }) {
  const images = {
    calabresa,
    pepperoni,
    atum,
    queijo,
    portuguesa,
    brocolis,
  };

  function formatOrderDate(date) {
    let diffminutes = differenceInMinutes(
      parseISO(new Date().toISOString()),
      new Date(date)
    );
    if (diffminutes > 1440) {
      let days = Math.round(diffminutes / 60 / 24);
      let end = days > 1 ? ' dias' : ' dia';
      return 'há ' + days + end;
    } else if (diffminutes > 60) {
      let hours = Math.round(diffminutes / 60);
      let end = hours > 1 ? ' horas' : ' hora';
      return 'há ' + hours + end;
    } else {
      return 'há ' + diffminutes + ' minutos';
    }
  }

  return (
    <Container>
      <Header>
        <OrderTitle>
          Pedido <span>#{index}</span> - {order.user.name}
        </OrderTitle>
        <Time>{order.time}</Time>
        <OrderPrice>R$ {order.price}</OrderPrice>
      </Header>
      <Line />
      <Orders>
        {order.items.map((o, i) => {
          return (
            <OrderBox key={i}>
              {o.productType && (
                <img
                  src={images[o.productType.name.toLowerCase()]}
                  alt='Pizza'
                />
              )}
              <div>
                <h4>
                  {o.product &&
                    o.productType &&
                    o.product.name + ' de ' + o.productType.name}
                </h4>
                <small>Tamanho {o.productSize && o.productSize.name}</small>
              </div>
            </OrderBox>
          );
        })}
      </Orders>
      <Line />
      <Observations>Observações: {order.note}</Observations>
      <Line />
      <ButtonContainer>
        <Button
          color='#7bae51'
          hover='#4e6e33'
          onClick={() => handleOrderStage({ id: order._id, status: 'preparo' })}
        >
          preparo
        </Button>
        <Button
          color='#2866b4'
          hover='#194072'
          onClick={() => handleOrderStage({ id: order._id, status: 'entrega' })}
        >
          entrega
        </Button>
      </ButtonContainer>
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
  max-height: 320px;
  max-width: 650px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  background: white;
  border-radius: 5px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  animation: entrance 0.3s forwards;

  @keyframes entrance {
    from {
      opacity: 0;
      transform: translateX(-150px);
    }

    to {
      opacity: initial;
      transform: initial;
    }
  }
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
  width: 210px;
  border: 1px solid #f2eeee;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
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
`;

const Observations = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  color: #706e7b;
  letter-spacing: 0;
  text-align: left;
  padding-top: 10px;
  margin-bottom: 20px;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: #f2eeee;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Button = styled.div`
  background: ${(props) => props.color || '#e5293e'};
  color: #fff;
  padding: 5px 35px;
  margin: 10px 20px 0 0;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background: ${(props) => props.hover || '#ab1425'};
  }
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
`;
