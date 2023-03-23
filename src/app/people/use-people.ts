import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../selectors';
import { peopleRequest } from './people.actions';

export const usePeople = () => {
  const characters = useSelector(selectors.characters);
  const loadingPeople = useSelector(selectors.fetchingPeople);
  const fetchingPeopleError = useSelector(selectors.fetchPeopleError);
  const page = useSelector(selectors.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(peopleRequest(page));
  }, [dispatch, page]);

  return { characters, loadingPeople, fetchingPeopleError };
};
