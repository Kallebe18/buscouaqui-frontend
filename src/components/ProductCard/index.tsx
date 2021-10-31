import { currencyFormat } from "../../utils";
import { Container, Image, ImageContainer, InfoContainer, Name, Price, Store } from "./styles";

interface ProductCardProps {
  data: any;
}

export function ProductCard({ data }: ProductCardProps) {
  return (
    <Container target="_blank" href={data.purchaseLink}>
      <ImageContainer>
        <Image src={data.image}/>
      </ImageContainer>
      <InfoContainer>
        <Name>{data.name}</Name>
        <Price>{currencyFormat(Number(data.price))}</Price>
        <Store>{data.store}</Store>
      </InfoContainer>      
    </Container>
  );
}