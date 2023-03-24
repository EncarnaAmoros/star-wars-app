import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { charactersMessages } from '../../messages';
import { CHARACTERS_PER_PAGE } from '../../constants';
import { Search } from '../../../components/search';
import { Character } from '../../types';

type CharactersProps = {
  characters: Character[];
  page: number;
  totalCharacters: number;
  onLoadMoreCharacters: (e: PaginatorPageChangeEvent) => void;
  onSearchCharacteres: (search: string) => void;
};

export function CharactersList({
  characters,
  page,
  totalCharacters,
  onLoadMoreCharacters,
  onSearchCharacteres
}: CharactersProps) {
  return (
    <div data-testid="characters-list-test-id">
      {characters?.length === 0 && <p>{charactersMessages.noDataFound}</p>}
      <>
        <DataTable
          value={characters || []}
          scrollable
          scrollHeight="400px"
          header={
            <Search
              onSearch={onSearchCharacteres}
              placeholder={charactersMessages.searchPlaceholder}
            />
          }
          data-testid="characters-table-test-id">
          <Column field="name" sortable header={charactersMessages.name}></Column>
          <Column field="height" sortable header={charactersMessages.height}></Column>
          <Column field="mass" sortable header={charactersMessages.mass}></Column>
          <Column field="created" sortable header={charactersMessages.created}></Column>
          <Column field="edited" sortable header={charactersMessages.edited}></Column>
          <Column field="homeworld.name" sortable header={charactersMessages.planet}></Column>
        </DataTable>

        <Paginator
          first={page}
          rows={CHARACTERS_PER_PAGE}
          totalRecords={totalCharacters}
          onPageChange={onLoadMoreCharacters}
          template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }}
        />
      </>
    </div>
  );
}
