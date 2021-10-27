import { useState } from "react";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import { ContentContainer, HomeContainer, ProductList, ProductListHeader } from "./styles";

export function Home() {
  const [searchResult, setSearchResults] = useState<any | undefined>();

  function shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <>
      <Header setResults={(data) => {
        setSearchResults({
          ...data,
          results: shuffle(data.results)
        })
      }}/>
      <HomeContainer>
        <ContentContainer>
          {
            searchResult !== undefined && 
              <>
                <ProductListHeader>
                  <h2>{searchResult.query}</h2>
                  <p style={{ fontSize: 12 }}>{searchResult.count} resultados encontrados</p>
                </ProductListHeader>
                <ProductList>
                  {searchResult.results.map((result: any) => (
                    <ProductCard data={result}/>
                  ))}
                </ProductList>
              </>
          }
        </ContentContainer>
      </HomeContainer>
    </>
  )
}