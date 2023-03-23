import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { charactersMessages } from '../../messages';
import { Character } from '../../types';

type CharactersProps = {
  characters?: Character[];
};

export function CharactersList({ characters }: CharactersProps) {
  return (
    <div data-testid="characters-list-test-id">
      {characters?.length === 0 ? (
        <p>{charactersMessages.noDataFound}</p>
      ) : (
        <>
          <DataTable value={characters || []} data-testid="characters-table-test-id">
            <Column field="name" header={charactersMessages.name}></Column>
            <Column field="height" header={charactersMessages.height}></Column>
            <Column field="mass" header={charactersMessages.mass}></Column>
            <Column field="created" header={charactersMessages.created}></Column>
            <Column field="edited" header={charactersMessages.edited}></Column>
            <Column field="homeworld.name" header={charactersMessages.planet}></Column>
          </DataTable>
        </>
      )}
    </div>
  );
}
