import { useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import debounce from 'lodash/debounce';

type SearchProps = {
  placeholder: string;
  onSearch: (search: string) => void;
};

export function Search({ placeholder, onSearch }: SearchProps) {
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
    <div className="flex justify-content-end" data-testid="search-component">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText onChange={handleChange} placeholder={placeholder} />
      </span>
    </div>
  );
}
