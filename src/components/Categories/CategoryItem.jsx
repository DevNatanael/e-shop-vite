import React from 'react'
import {Container2, Image, Info, Title, Button} from './styles'

export const CategoryItem = ({item}) => {
  return (
    <Container2>
        <Image src={item.img}/>
        <Info>
            {/* <Title>{item.title}</Title> */}
            <Button>COMPRE AGORA</Button>
        </Info>
    </Container2>
  )
}
