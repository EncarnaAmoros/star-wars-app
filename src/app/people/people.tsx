import { peopleMessages } from '../messages';
import { CharactersList } from './characters-list/characters-list';
import { usePeople } from './use-people';

export function People() {
  const { characters } = usePeople();

  return (
    <main>
      <h2>{peopleMessages.title}</h2>
      <section>
        <CharactersList characters={characters} />
      </section>
    </main>
  );
}
