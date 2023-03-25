import { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';

import { Loader } from '../../components/loader';
import { Search } from '../../components/search';
import { CharactersList } from '../components/characters-list';
import { PlanetDetail } from '../components/planet-detail';
import { Modal } from '../../components/modal';
import { NotFound } from '../not-found';
import { peopleMessages } from '../messages';
import { usePeopleData } from './use-people-data';
import { usePlanetModalData } from './use-planel-modal-data';
import styles from './people.module.css';

export function People() {
  const notifications = useRef<Toast>(null);
  const {
    characters,
    loadingPeople,
    fetchingPeopleError,
    totalPeople,
    page,
    loadMorePeople,
    onSearchCharacteres
  } = usePeopleData();
  const { planetSeeInDetail, planetVisibility, displayPlanetDetails, changeDialogVisibility } =
    usePlanetModalData();

  useEffect(() => {
    if (fetchingPeopleError) {
      notifications.current?.show({
        severity: 'error',
        detail: fetchingPeopleError
      });
    }
  }, [fetchingPeopleError]);

  return (
    <>
      <Toast ref={notifications} />

      <main className={styles.container}>
        <h2>{peopleMessages.title}</h2>
        <section>
          <div className={styles.search}>
            <Search
              placeholder={peopleMessages.searchPlaceholder}
              loadingSearch={loadingPeople}
              onSearch={onSearchCharacteres}
            />
          </div>
          <CharactersList
            page={page}
            characters={characters}
            totalCharacters={totalPeople}
            onLoadMoreCharacters={loadMorePeople}
            onClickPlanetName={displayPlanetDetails}
          />
          <Modal
            title={peopleMessages.peoplePlanetTitleModal}
            visible={planetVisibility}
            children={
              planetSeeInDetail ? (
                <PlanetDetail planet={planetSeeInDetail} />
              ) : (
                <NotFound type="data" />
              )
            }
            onChangeDialogVisibility={changeDialogVisibility}
          />
          {loadingPeople && <Loader />}
        </section>
      </main>
    </>
  );
}
