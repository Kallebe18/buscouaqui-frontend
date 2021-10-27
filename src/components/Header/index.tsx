import { useState } from 'react'
import {
  FaSearchDollar
} from 'react-icons/fa'
import { api } from '../../services/api'

import {
  HeaderContainer, 
  ContentContainer, 
  TopContentContainer, 
  BottomContentContainer, 
  SearchForm, 
  Input
} from './styles'

interface HeaderProps {
  setResults(products: any): void;
}

export function Header({ setResults }: HeaderProps) {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = async () => {
    if (!loading) {
      setLoading(true)
      const response = await api.get('/search', {
        params: {
          query
        }
      })
      setQuery('');
      setResults(response.data)
      setLoading(false)
    }
  }

  return (
    <HeaderContainer>
      <ContentContainer>
        <TopContentContainer>
          <h1 style={{
            margin: 20,
            color: '#fff'
          }}>Pesquise pelos seus eletrônicos em um só lugar!</h1>
          <SearchForm onSubmit={() => {}}>
            <Input
              placeholder='Digite aqui sua busca...'
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  handleSearch()
                }
              }}
              onChange={(e) => setQuery(e.currentTarget.value)}
              value={query}
            />
            <FaSearchDollar 
              onClick={() => {
                handleSearch()
              }}
              color='#999'
              size={23} 
              style={{
                cursor: 'pointer',
                padding: 20,
              }}
            />
          </SearchForm>
        </TopContentContainer>
        <BottomContentContainer>

        </BottomContentContainer>
      </ContentContainer>
      {loading && <div style={{
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: '#999'
      }}>Carregando</div>}
    </HeaderContainer>
  )
}