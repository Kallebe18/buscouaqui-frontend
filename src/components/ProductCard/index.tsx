import { currencyFormat } from "../../utils";
import { Container, Image, ImageContainer, InfoContainer, Name, Price, Store, StoreContainer, StoreImage } from "./styles";
import KabumIcon from '../../assets/kabum_icon.png'
import TerabyteIcon from '../../assets/terabyte_icon.png'
import AmazonIcon from '../../assets/amazon_icon.png'
import AliexpressIcon from '../../assets/aliexpress_icon.png'

interface ProductCardProps {
  data: any;
}

export function ProductCard({ data }: ProductCardProps) {
  const chooseStoreImage = () => {
    switch (data.store) {
      case 'kabum':
        return KabumIcon
      case 'terabyte':
        return TerabyteIcon
      case 'amazon':
        return AmazonIcon
      case 'aliexpress':
        return AliexpressIcon
    }
  }

  return (
    <Container target="_blank" href={data.purchaseLink}>
      <ImageContainer>
        <Image src={data.image}/>
      </ImageContainer>
      <InfoContainer>
        <Name>{data.name}</Name>
        <Price>{currencyFormat(Number(data.price))}</Price>
        <StoreContainer>
          <StoreImage src={chooseStoreImage()}/>
          <Store>{data.store}</Store>
        </StoreContainer>
      </InfoContainer>      
    </Container>
  );
}