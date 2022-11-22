import React from 'react'
import {ContainerProduct, Circle, Image, Icon, Info} from './styles'
import { BsCart2 } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import {AiFillHeart} from 'react-icons/ai'

export const Product = ({item}) => {
  return (
    <ContainerProduct>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <BsCart2 />
            </Icon>

            <Icon>
                <BiSearch />
            </Icon>

            <Icon>
                <AiFillHeart />
            </Icon>
        </Info>
    </ContainerProduct>
  )
}
