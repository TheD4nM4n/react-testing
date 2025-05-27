import { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Toolbar, Typography } from "@mui/material";

function Sidebar() {
    
    const [sidebarVisible, setSidebarVisible] = useState(false);
    const toggleSidebar = () => setSidebarVisible(!sidebarVisible);

    return ( <>
    <Toolbar>
      <i className="bi bi-list"
        onClick={toggleSidebar}
        style={{ marginInlineStart: "16px", fontSize: "40px" }}></i>
        
        <Typography variant="h6">The Playground</Typography>
      </Toolbar>

    <Offcanvas show={sidebarVisible} onHide={toggleSidebar}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>The Playground</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Button variant="primary" style={{marginBottom: '8px'}} href="/">Home</Button>
          <Button variant="primary" style={{marginBottom: '8px'}} href="/dan">Dan</Button>
          <Button variant="primary" href="/justin">Justin</Button>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
    </>)
}

export default Sidebar;