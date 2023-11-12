import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Hasil, ListCategories, Menus, NavbarComponents } from './components';
import './App.css';

// Backend
import { API_URL } from './utils/constants';
import axios from 'axios';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
    }
  }

  componentDidMount() {
    axios
      .get(API_URL + "products")
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log("Error yaa :)", error);
      })
  }

  render() {
    const { menus } = this.state

    return (
      <div className="App" >
        <NavbarComponents />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories />
              <Col>
                <h4><strong>Daftar Produk</strong></h4><hr />
                <Row>
                  {menus && menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                    />
                  ))}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>

        {/* <div className="my-4">
          <h1>Dicky April Zahdi</h1>
          <p><strong>FrontEnd Web</strong></p>
          <hr />
          <ul>
            <li><code>PAKET: npx create-react-app kasir</code></li>
            <li><code>CSS: npm install react-bootstrap bootstrap</code></li>
            <li><code>NOTIF: npm install sweetalert --save</code></li>
            <li><code>API: npm install axios</code></li>
            <li><code>JSON Server: npm install -g json-server</code></li>
          </ul>
        </div> */}
      </div>
    )
  }
}
