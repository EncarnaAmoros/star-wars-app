import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import { charactersMessages } from '../../messages';
import { CHARACTERS_PER_PAGE } from '../../constants';
import { Character, Planet } from '../../types';
import styles from './characters-list.module.css';

type CharactersProps = {
  characters: Character[];
  page: number;
  totalCharacters: number;
  onLoadMoreCharacters: (e: PaginatorPageChangeEvent) => void;
  onClickPlanetName?: (planet: Planet) => void;
};

export function CharactersList({
  characters,
  page,
  totalCharacters,
  onLoadMoreCharacters,
  onClickPlanetName
}: CharactersProps) {
  const renderPlanetCell = (character: Character) => (
    <div
      onClick={() => {
        onClickPlanetName && character?.homeworld
          ? onClickPlanetName(character.homeworld)
          : () => {
              return;
            };
      }}
    >
      {character.homeworld?.name || charactersMessages.noItemFound}
    </div>
  );

  return (
    <div data-testid="characters-list-test-id">
      {characters?.length === 0 && <p className="p-2">{charactersMessages.noDataFound}</p>}
      <>
        <DataTable
          value={characters || []}
          scrollable
          scrollHeight="400px"
          data-testid="characters-table-test-id"
        >
          <Column header={charactersMessages.name} field="name" sortable />
          <Column header={charactersMessages.height} field="height" sortable />
          <Column header={charactersMessages.mass} field="mass" sortable />
          <Column header={charactersMessages.created} field="created" sortable />
          <Column header={charactersMessages.edited} field="edited" sortable />
          <Column
            header={charactersMessages.planet}
            className={onClickPlanetName ? styles.clicable : ''}
            field="homeworld.name"
            body={renderPlanetCell}
            sortable
          />
        </DataTable>

        <Paginator
          first={page}
          rows={CHARACTERS_PER_PAGE}
          totalRecords={totalCharacters}
          onPageChange={onLoadMoreCharacters}
          template={{
            layout: 'PrevPageLink CurrentPageReport NextPageLink'
          }}
        />
      </>
    </div>
  );
}
