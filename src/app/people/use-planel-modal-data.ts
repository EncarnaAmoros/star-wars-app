import { useState } from 'react';
import { Planet } from '../types';

export const usePlanetModalData = () => {
  const [planetSeeInDetail, setPlanetSeeInDetail] = useState<Planet | undefined>(undefined);
  const [planetVisibility, setPlanetVisibility] = useState<boolean>(false);

  const displayPlanetDetails = (planet: Planet) => {
    setPlanetSeeInDetail(planet);
    setPlanetVisibility(true);
  };

  const changeDialogVisibility = () => {
    setPlanetVisibility(!planetVisibility);
  };

  return {
    planetSeeInDetail,
    planetVisibility,
    displayPlanetDetails,
    changeDialogVisibility
  };
};
