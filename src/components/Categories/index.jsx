import React from 'react'
import {Container} from './styles'
import {categories} from '../../data'
import { CategoryItem } from './CategoryItem'

export const Categories = () => {
  return (
   <Container>
    {categories.map(item=>(
        <CategoryItem item={item}/>
    ))}
   </Container>
  )
}
