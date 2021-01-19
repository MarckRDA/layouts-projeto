import { Card, Button } from "react-bootstrap";
import styled from "styled-components";


const CardStyled = styled(Card)`
  width:15rem;
  margin:10px;
  font-size: 10px;
`
const CardTitleStyled = styled(Card.Title)`
   font-size: 10px;
`

const CardTrendProduct = (props) => {
    
  return (
    <>
    <CardStyled>
      <Card.Img style={{width: 100, height:100}} variant="top" src={props.productThumbImage} />
      <Card.Body>
        <CardTitleStyled style={{fontSize: 10}}>{props.productName}</CardTitleStyled>
        <CardStyled.Text>R$ {props.productPrice}</CardStyled.Text>
        <Button variant="primary">Ver Produto</Button>
      </Card.Body>
    </CardStyled>
    </>
  );
}

export default CardTrendProduct;