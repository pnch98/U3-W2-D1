import { Component } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import fantasy from "../data/books/fantasy.json";
import history from "../data/books/history.json";
import horror from "../data/books/horror.json";
import romance from "../data/books/romance.json";
import scifi from "../data/books/scifi.json";

function Genre(props) {
  return (
    <DropdownButton id="dropdown-basic-button" title="Genre" className="mb-3">
      <Dropdown.Item onClick={() => props.onDataChange(fantasy)}>Fantasy</Dropdown.Item>
      <Dropdown.Item onClick={() => props.onDataChange(history)}>History</Dropdown.Item>
      <Dropdown.Item onClick={() => props.onDataChange(horror)}>Horror</Dropdown.Item>
      <Dropdown.Item onClick={() => props.onDataChange(romance)}>Romance</Dropdown.Item>
      <Dropdown.Item onClick={() => props.onDataChange(scifi)}>Scifi</Dropdown.Item>
    </DropdownButton>
  );
}
export default Genre;
