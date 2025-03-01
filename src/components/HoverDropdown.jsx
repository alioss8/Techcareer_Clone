import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";

const HoverDropdown = () => {
  const [show, setShow] = useState(false);

  return (
    <div >
      <Dropdown
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        show={show}
      >
        <Dropdown.Toggle variant="primary"   >Menü</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Seçenek 1</Dropdown.Item>
          <Dropdown.Item href="#">Seçenek 2</Dropdown.Item>
          <Dropdown.Item href="#">Seçenek 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default HoverDropdown;
