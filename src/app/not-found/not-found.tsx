import { notFound } from '../messages';

export function NotFound() {
  return (
    <main>
      <h2>{notFound.title}</h2>
      <p>{notFound.description}</p>
    </main>
  );
}
