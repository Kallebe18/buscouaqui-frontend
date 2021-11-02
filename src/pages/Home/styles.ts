import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  width: 80%;
  @media (min-width: 1200px) {
    width: 1000px;
  }
`;

export const ProductListHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const SearchArtContainer = styled.img`
  margin-top: 120px;
  width: 200px;
  @media (min-width: 1200px) {
    width: 300px;
  }
`;
