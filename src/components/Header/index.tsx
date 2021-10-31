import { useState } from 'react'
import {
  FaSearchDollar
} from 'react-icons/fa'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import { TextBlock } from '../../stylesGlobal'
import { Loader } from '../Loader'

import {
  HeaderContainer, 
  ContentContainer, 
  TopContentContainer, 
  BottomContentContainer, 
  SearchForm, 
  Input,
  HeaderTitle
} from './styles'

interface HeaderProps {
  setResults(products: any): void;
}

export function Header({ setResults }: HeaderProps) {
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')

  const handleSearch = async () => {
    console.log(query)
    if (!loading) {
      if (!query) {
        return toast.error('Digite algo antes de pesquisar.')
      }
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
          <HeaderTitle>Pesquise seus produtos <TextBlock>em um só lugar!</TextBlock></HeaderTitle>
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
      {loading && <Loader title="Buscando produtos..."/>}
    </HeaderContainer>
  )
}