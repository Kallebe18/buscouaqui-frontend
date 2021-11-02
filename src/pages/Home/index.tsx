import { ChangeEvent, useState } from "react";
import { Header } from "../../components/Header";
import { ProductCard } from "../../components/ProductCard";
import {
  ContentContainer,
  HomeContainer,
  ProductList,
  ProductListHeader,
  SearchArtContainer,
} from "./styles";
import SearchArt from "../../assets/search_art.svg";
import { comparePriceDec, comparePriceInc } from "../../utils";
import { Footer } from "../../components/Footer";

export function Home() {
  const [searchResults, setSearchResults] = useState<any>();
  const [currentQuery, setCurrentQuery] = useState("");

  function shuffle(array: any[]) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    if (value === "2") {
      setSearchResults({
        ...searchResults,
        results: searchResults.results.sort(comparePriceInc),
      });
    }
    if (value === "3") {
      setSearchResults({
        ...searchResults,
        results: searchResults.results.sort(comparePriceDec),
      });
    }
  };

  return (
    <>
      <Header
        changeQuery={(query) => setCurrentQuery(query)}
        setResults={(data) => {
          setSearchResults({
            ...data,
            results: shuffle(data.results),
          });
        }}
      />
      <HomeContainer>
        <ContentContainer>
          {searchResults !== undefined ? (
            <>
              <ProductListHeader>
                <div>
                  <h2>{currentQuery}</h2>
                  <p style={{ fontSize: 12 }}>
                    {searchResults.count} resultados encontrados
                  </p>
                </div>
                <div>
                  <label htmlFor="filters">Filtro: </label>
                  <select onChange={handleFilter} name="filters" id="filters">
                    <option value="1">Sem Filtro</option>
                    <option value="2">Menor Preço</option>
                    <option value="3">Maior Preço</option>
                  </select>
                </div>
              </ProductListHeader>
              <ProductList>
                {searchResults.results.map((result: any) => (
                  <ProductCard key={result.id} data={result} />
                ))}
              </ProductList>
            </>
          ) : (
            <>
              <SearchArtContainer src={SearchArt} alt="Search Art" />
            </>
          )}
        </ContentContainer>
      </HomeContainer>
      <Footer />
    </>
  );
}
