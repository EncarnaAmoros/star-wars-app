import { rest } from 'msw';
import {
  planetResponseMock1,
  planetResponseMock2,
  planetResponseMock8,
  planetResponseMock20
} from './planet-response-mock';

export const planetHandlers = [
  rest.get('*/api/planets/:id/', (req, res, ctx) => {
    const { id } = req.params;

    switch (id) {
      case '1':
        return res(ctx.status(200), ctx.json(planetResponseMock1));
      case '2':
        return res(ctx.status(200), ctx.json(planetResponseMock2));
      case '8':
        return res(ctx.status(200), ctx.json(planetResponseMock8));
      case '20':
        return res(ctx.status(200), ctx.json(planetResponseMock20));
      default:
        return res(ctx.status(200), ctx.json(planetResponseMock1));
    }
  })
];
