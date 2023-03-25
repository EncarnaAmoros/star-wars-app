import { planetMessages } from '../../messages';
import { Planet } from '../../types';

type PlanetProps = {
  planet: Planet;
};

export function PlanetDetail({ planet }: PlanetProps) {
  return (
    <section>
      <h2>{planet.name}</h2>
      <div>
        <p>{planetMessages.diameter}</p>
        <p>{planet.diameter}</p>
      </div>
      <div>
        <p>{planetMessages.climate}</p>
        <p>{planet.climate}</p>
      </div>
      <div>
        <p>{planetMessages.population}</p>
        <p>{planet.population}</p>
      </div>
    </section>
  );
}
