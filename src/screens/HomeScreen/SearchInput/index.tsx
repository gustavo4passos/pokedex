import React, { useState } from 'react';
import { SearchContainer, InputField } from './styles';

interface ISearchInputProps {
  searchPokemon: (pokemonName: string) => void,
}

const SearchInput = (props: ISearchInputProps) => {
  const [name, setName] = useState('');

  return (
    <SearchContainer>
      <InputField
        placeholder="Digite o nome do pokemon"
        onSubmitEditing={() => props.searchPokemon(name)}
        value={name}
        onChangeText={setName}
      />
    </SearchContainer>
  );
};

export default SearchInput;
