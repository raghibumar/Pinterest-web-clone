// "rfce+tab" shortcut of templet of react component
import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

function Pin({urls,alt_description,id}) {
  return (
    <Wrapper>
        <Container>
         
          <LinkComp to={`/pin/${id}`}>
          <img src={urls?.regular} alt="pin"/>
          <h3>{alt_description}</h3>
          </LinkComp>
          
        </Container>
    </Wrapper>
  )
}

export default Pin

const Wrapper = styled.div`
  display: inline-flex;
  /* border: 1px solid black; */
  padding: 8px;
`

const Container=styled.div`
display:flex;
align-items:center;
box-sizing:border-box;
cursor: pointer;
width:236px;

img{
    display: flex;
    width: 100%;
    cursor:zoom-in;
    border-radius: 16px;
    object-fit: cover;
}


`

const LinkComp = styled(Link)`text-decoration: none;
color:black;`

