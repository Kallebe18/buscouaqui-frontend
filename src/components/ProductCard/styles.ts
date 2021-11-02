import styled from "styled-components";

export const Container = styled.a`
  height: 350px;
  width: 250px;
  border: 1.5px solid #cdcdcd;
  border-radius: 10px;
  margin: 20px;
  overflow: hidden;
  text-decoration: none;
  color: black;

  transition: all 0.5s;
  :hover {
    -webkit-box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.4); 
    box-shadow: 0px 5px 10px 3px rgba(0,0,0,0.4);
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const Image = styled.img`
  height: 100%;
`

export const InfoContainer = styled.div`
  padding: 10px 15px;
`

export const Name = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`

export const PriceContainer = styled.div`
  
`

export const Price = styled.p`
  margin: 20px 0;
  color: #777;
`

export const StoreContainer = styled.div`
  display: flex;
  align-items: center;
`

export const StoreImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`

export const Store = styled.p`
  font-size: 12px;
`