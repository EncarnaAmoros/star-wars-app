import { ProgressSpinner } from 'primereact/progressspinner';

export function Loader() {
  return (
    <div data-testid="loader">
      <ProgressSpinner />
    </div>
  );
}
