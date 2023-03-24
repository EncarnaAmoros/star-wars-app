import { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';

import { peopleMessages } from '../messages';
import { Loader } from '../../components/loader';
import { usePeople } from './use-people';
import { CharactersList } from './characters-list';
import styles from './people.module.css';

export function People() {
  const {
    characters,
    loadingPeople,
    fetchingPeopleError,
    totalPeople,
    page,
    loadMorePeople,
    onSearchCharacteres
  } = usePeople();
  const notifications = useRef<Toast>(null);

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
          <CharactersList
            page={page}
            characters={characters}
            totalCharacters={totalPeople}
            onLoadMoreCharacters={loadMorePeople}
            onSearchCharacteres={onSearchCharacteres}
          />
          {loadingPeople && <Loader />}
        </section>
      </main>
    </>
  );
}
