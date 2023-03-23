import { useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';

import { peopleMessages } from '../messages';
import { Loader } from '../../components/loader';
import { usePeople } from './use-people';
import { CharactersList } from './characters-list';
import styles from './people.module.css';

export function People() {
  const { characters, loadingPeople, fetchingPeopleError } = usePeople();
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
        <section>{loadingPeople ? <Loader /> : <CharactersList characters={characters} />}</section>
      </main>
    </>
  );
}
