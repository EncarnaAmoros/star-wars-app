import { notFound } from '../messages';

type NotFoundProps = {
  type: 'page' | 'data';
};

export function NotFound({ type }: NotFoundProps) {
  return (
    <main>
      <h2>{notFound.title}</h2>
      <p>{type === 'page' ? notFound.pageError : notFound.dataError}</p>
    </main>
  );
}
