import { useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import debounce from 'lodash/debounce';

export type SearchProps = {
  placeholder: string;
  loadingSearch: boolean;
  onSearch: (search: string) => void;
};

export function Search({ placeholder, loadingSearch, onSearch }: SearchProps) {
  const debouncedSearch = useRef(debounce(onSearch, 300)).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }

  return (
    <div data-testid="search-component" className="pb-1.5 w-1/2">
      <span className="p-input-icon-left w-full">
        <i className={loadingSearch ? 'pi pi-spin pi-spinner' : 'pi pi-search'} />
        <InputText onChange={handleChange} placeholder={placeholder} className="w-full" />
      </span>
    </div>
  );
}
