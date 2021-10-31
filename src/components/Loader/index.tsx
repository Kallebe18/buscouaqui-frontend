import { LoaderContainer, LoaderTitle } from "./styles";
import { Puff } from 'react-loading-icons'

interface LoaderProps {
  title?: string;
}

export function Loader({ title }: LoaderProps) {
  return (
    <LoaderContainer>
      <Puff/>
      {
        title && <LoaderTitle>{title}</LoaderTitle>
      }
    </LoaderContainer>
  )
}