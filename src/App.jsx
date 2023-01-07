import { useState } from "react";
import logo from "./assets/img/logominified.png";
import imgpdt1 from "./assets/img/imgpdt1.jpeg";
import bgmenu from "./assets/img/bgmenu.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Toast from 'react-bootstrap/Toast';

import firebase from './firebase.js'
import "./App.scss";
import "./Menu.scss";

function App() {
  const listPlat = ['Alloco poulet', 'Attiéké poisson', 'Foufou avec du poisson', 'Tchep au (poulet, viande, poisson)']
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [textValidate, setTextValidate] = useState('')
  const [userName, setUserName] = useState("");
  const [nameTable, setNameTable] = useState("");
  const [errorListPlat, setErrorListPlat] = useState("");
  const [numberPlat, setNumberPlat] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const handlePlat = (number) => {
    if (numberPlat !== 0) {
      setErrorListPlat(`Impossible d'ajouter plus d'un (1) plat`);
      setShow(true);
    }
    setNumberPlat(number)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTextValidate('');
    setShowToast(false);

    if (userName == '') {
      setTextValidate('Saississez Obligatoirement Votre nom ou surnom');
      setShowToast(true);
      return
    }

    if (nameTable == '') {
      setTextValidate('Selectionnez Obligatoirement le nom de votre table');
      setShowToast(true);
      return
    }

    if (numberPlat === 0) {
      setTextValidate('Choississez Obligatoirement au moins un plat');
      setShowToast(true);
      return
    }

    setLoading(true)

    console.log(userName, nameTable, listPlat[numberPlat]);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({userName: `${userName}`, nameTable: `${nameTable}`, namePlat: `${listPlat[numberPlat]}`})
    };

    const response = await fetch('https://reqres.in/api/posts', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });

    // console.log('event', event);
    // setShowToast(true)
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
            // User is signed in
            var email = user.email;
            // ...
        } else {
            // User is not signed in
            // ...
        }
    });
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  return (
    <div className="App">
      <div className="page__menu">
        {showToast && (<Toast
          bg={'info'}
          className="d-inline-block my-2"
          onClose={() => setShowToast(false)}
        >
          <Toast.Header>
            <img
              src={logo}
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">UESI</strong>
            <small>D'accord</small>
          </Toast.Header>
          <Toast.Body className={'Info'}>
            {textValidate}
          </Toast.Body>
        </Toast>)}

        <Form onSubmit={handleSubmit}>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card as={Col} md="4">
                <Card.Img variant="left" src={logo} className="image-logo" />
              </Card>
            </Col>
            <Col>
              <Alert variant="success" as={Col} md="8">
                <Alert.Heading className="text-center">
                  Table par personne:{" "}
                </Alert.Heading>
                <hr />
              </Alert>
            </Col>
          </Row>

          <Row className="mb-4">
            <Form.Group as={Col} md="6" className="mb-2">
              <Form.Label>Saisissez votre nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ecrivez votre nom svp"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label className="mb-2">Liste des noms de tables</Form.Label>
              <Form.Select aria-label="Default select example" as={Col} md="6" value={nameTable} onChange={(e) => setNameTable(e.target.value)}>
                <option>Choisissez le nom de votre table</option>
                <option value="jojogabbana">Jojo Gabbana</option>
                <option value="sagajunior">Saga Junior</option>
                <option value="jeanjacqueskouame">Jean-Jacques Kouamé</option>
                <option value="lemolare">Le Molare</option>
                <option value="papaministre">Papa Ministre</option>
                <option value="sergedefalet">Serge Defalet</option>
                <option value="douksaga">Douk Saga</option>
                <option value="bedelpatassboscow">Bedel Patassé Boscow</option>
                <option value="solobeton">Solo Béton</option>
                <option value="aboudebamba">Abou de Bamba</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <h5>Entrées: </h5>
          <p>Crudité, Amuse bouche</p>
          <h5>Plats de résistance: </h5>
          <ListGroup className="mb-4">
            <ListGroup.Item variant="primary">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Alloco poulet"
                value={1}
                onChange={() => handlePlat(1)}
                checked={numberPlat === 1 ? true : false}
              />
            </ListGroup.Item>
            <ListGroup.Item variant="secondary">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Attiéké poisson"
                value={2}
                onChange={() => handlePlat(2)}
                checked={numberPlat === 2 ? true : false}
              />
            </ListGroup.Item>
            <ListGroup.Item variant="success">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Foufou avec du poisson"
                value={3}
                onChange={() => handlePlat(3)}
                checked={numberPlat === 3 ? true : false}
              />
            </ListGroup.Item>
            <ListGroup.Item variant="dark">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Tchep au (poulet, viande, poisson)"
                value={4}
                onChange={() => handlePlat(4)}
                checked={numberPlat === 4 ? true : false}
              />
            </ListGroup.Item>
          </ListGroup>
          {errorListPlat !== "" && show && (
            <Form.Text className="text-center text-muted mb-4">
              <Alert
                variant="danger"
                onClose={() => setShow(false)}
                dismissible
              >
                <Alert.Heading>{errorListPlat}</Alert.Heading>
              </Alert>
            </Form.Text>
          )}

          <h5>Souper de 04h: </h5>
          <p className="mb-4">Traditionnelle Pepper soupe</p>

          <div className="d-grid gap-2">
            <Button variant="outline-success" type="submit" size="lg" disabled={isLoading}>
              {isLoading ? 'Votre demande a ete envoye' : 'Cliquer pour faire la demande'}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default App;
