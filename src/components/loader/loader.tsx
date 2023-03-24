import { ProgressBar } from 'primereact/progressbar';

export function Loader() {
  return (
    <div data-testid="loader">
      <ProgressBar mode="indeterminate" style={{ height: '6px' }} />
    </div>
  );
}
