import { useState } from "react";
import { Form } from "react-bootstrap";
import { useSearchTimeout } from "../hooks";

export default function ListSearch({ callback }) {
  const [search, setSearch] = useState("");

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  const callSearchCallback = () => {
    callback(search);
  };

  useSearchTimeout(search, callSearchCallback, 500);

  return (
    <Form>
      <Form.Group controlId="searchForm">
        <Form.Control
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}
