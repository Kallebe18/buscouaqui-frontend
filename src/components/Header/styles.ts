import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: #612a92;
`

export const ContentContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  width: 80%;
  @media(min-width: 1200px) {
    width: 600px;
  }
`

export const TopContentContainer = styled.div`
  width: 100%;
`

export const BottomContentContainer = styled.div`
`

export const SearchForm = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: red;
  border-radius: 25px;
  background-color: #fff;
  -webkit-box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.4); 
  box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.4);
  overflow: hidden;
`

export const Input = styled.input`
  color: #999;
  font-size: 16px;
  height: 100%;
  width: 100%;
  padding: 0 0 0 30px;
  outline: none;
  border: none;
`