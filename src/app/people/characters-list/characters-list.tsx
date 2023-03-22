import { characterMessages } from '../../messages';
import { Character } from '../../types';

type CharactersProps = {
  characters?: Character[];
};

export function CharactersList({ characters }: CharactersProps) {
  const noDataFound: boolean =
    characters === undefined || characters === null || characters.length === 0;

  return noDataFound ? (
    <p>{characterMessages.noDataFound}</p>
  ) : (
    <>
      {characters?.map((character, index) => {
        return <p key={index}>{character.name}</p>;
      })}
    </>
  );
}
