import React, { useState } from "react";
import { Header, Form, Button, Input } from "./Searchbar.styled";
import { ImSearch } from "react-icons/im";
import "react-toastify/dist/ReactToastify.min.css";

interface ISearchbarProps {
  onSubmit: (query: string[]) => void;
}

export const Searchbar: React.FC<ISearchbarProps> = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    onSubmit([query.toLowerCase().trim()]);
    setQuery("");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <ImSearch />
        </Button>
        <Input
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleInputChange}
        />
      </Form>
    </Header>
  );
};
