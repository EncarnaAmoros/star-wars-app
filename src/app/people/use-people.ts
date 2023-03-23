import { useEffect, useState } from 'react';
import { PaginatorPageChangeEvent } from 'primereact/paginator';
import { useDispatch, useSelector } from 'react-redux';
import { selectors } from '../selectors';
import { peopleRequest } from './people.actions';

export const usePeople = () => {
  const [page, setPage] = useState<number>(0);
  const characters = useSelector(selectors.characters);
  const loadingPeople = useSelector(selectors.fetchingPeople);
  const fetchingPeopleError = useSelector(selectors.fetchPeopleError);
  const totalPeople = useSelector(selectors.totalPeople);
  const urlNext = useSelector(selectors.next);
  const urlPrevious = useSelector(selectors.previous);
  const dispatch = useDispatch();

  const loadMorePeople = (event: PaginatorPageChangeEvent) => {
    const urlGetMorePeople = event.first > page ? urlNext : urlPrevious;
    setPage(event.first);
    dispatch(peopleRequest(urlGetMorePeople));
  };

  useEffect(() => {
    dispatch(peopleRequest());
  }, [dispatch]);

  return { characters, loadingPeople, fetchingPeopleError, totalPeople, page, loadMorePeople };
};
