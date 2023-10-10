import { Button } from "../atoms/button";
import { Input } from "../atoms/input";

export function SearchBar() {
  return (
    <div className="flex space-x-5">
      <Input placeholder="Search" />
      <Button>Search</Button>
    </div>
  );
}
