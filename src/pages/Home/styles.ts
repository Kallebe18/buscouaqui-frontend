import styled from "styled-components";

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const ContentContainer = styled.section`
  padding: 10px 20px;
  width: 80%;
  @media(min-width: 1200px) {
    width: 1000px;
  }
`

export const ProductListHeader = styled.section`
`

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`