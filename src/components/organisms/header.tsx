import { SearchBar } from "../molecules/search-bar";

export function Header() {
  return (
    <header className="flex w-full items-center justify-between p-8">
      <h1>Logo</h1>
      <SearchBar />
    </header>
  );
}
