import { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sidebar() {
    
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

    return ( <>
    <i className="bi bi-list"
        onClick={toggleSidebar}
        style={{ marginInlineStart: "16px", fontSize: "32px" }}></i>

    <Offcanvas show={sidebarVisible} onHide={toggleSidebar}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Sidebar</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Button variant="primary" href="/">Home</Button>
        <Button variant="primary" href="/dan">Dan</Button>
        <Button variant="primary" href="/justin">Justin</Button>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
    </>)
}

export default Sidebar;