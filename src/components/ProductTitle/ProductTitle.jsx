import { Title } from './ProductTitle.styled'

export const ProductTitle = ({name, ingredient, emotion}) => (
  <Title>This <span>{name}</span> chocolate bar is created with <span>{ingredient}</span> for your <span>{emotion}</span>!</Title>
)
export default ProductTitle