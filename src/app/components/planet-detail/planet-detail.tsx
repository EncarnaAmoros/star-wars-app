import { planetMessages } from '../../messages';
import { Planet } from '../../types';

type PlanetProps = {
  planet: Planet;
};

export function PlanetDetail({ planet }: PlanetProps) {
  return (
    <section>
      <p className="text-xl pb-2.5 uppercase mb-1">{planet.name}</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="inline-flex">
          <p className="font-semibold">{`${planetMessages.diameter}:`}</p>
          <p className="ml-1">{planet.diameter}</p>
        </div>
        <div className="inline-flex">
          <p className="font-semibold">{`${planetMessages.climate}:`}</p>
          <p className="ml-1">{planet.climate}</p>
        </div>
        <div className="inline-flex">
          <p className="font-semibold">{`${planetMessages.population}:`}</p>
          <p className="ml-1">{planet.population}</p>
        </div>
      </div>
    </section>
  );
}
