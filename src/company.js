import React from 'react';
import styled from 'styled-components'
import { space, width, fontSize, color, height } from 'styled-system';

const Img = styled.img`
  ${width}
`;

const Center = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Root = styled.div([], {
    width: '50vw',
    height: '100vh',
    display: 'flex',
    
});

const Title = styled.span`
  font-size: 50px;
  ${space}
`;


const ImgCenter = styled.div`
  display: flex;
`



export const Company = () => (
  <Root>
    <Center>
      <Title>Como eu entrei no mercado de trabalho ?</Title>
      <ImgCenter>
        <Img src={"./img/company.png"} width={700}/>
      </ImgCenter>
    </Center>
  </Root>
);
