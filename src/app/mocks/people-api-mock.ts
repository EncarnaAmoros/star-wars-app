import { rest } from 'msw';
import {
  peopleResponse,
  peopleResponseEmpty,
  peopleResponsePage2,
  peopleSearchLukeResponse
} from './people-response-mock';

export const peopleHandlers = [
  rest.get('*/api/people', (req, res, ctx) => {
    const search = req.url.searchParams.get('search');
    const page = req.url.searchParams.get('page');

    if (search === 'Luke') {
      return res(ctx.status(200), ctx.json(peopleSearchLukeResponse));
    } else if (page === '2') {
      return res(ctx.status(200), ctx.json(peopleResponsePage2));
    } else if (search === 'Spock') {
      return res(ctx.status(200), ctx.json(peopleResponseEmpty));
    } else {
      return res(ctx.status(200), ctx.json(peopleResponse));
    }
  })
];
