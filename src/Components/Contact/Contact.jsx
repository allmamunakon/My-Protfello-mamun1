import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className='text-light container'>Contact
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            defaultValue="Otto"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
          <select name="district">
        <option value="Bagerhat">Bagerhat</option>
        <option value="Bandarban">Bandarban</option>
        <option value="Barguna">Barguna</option>
        <option value="Barisal">Barisal</option>
        <option value="Bhola">Bhola</option>
        <option value="Bogra">Bogra</option>
        <option value="Brahmanbaria">Brahmanbaria</option>
        <option value="Chandpur">Chandpur</option>
        <option value="Chittagong">Chittagong</option>
        <option value="Chuadanga">Chuadanga</option>
        <option value="Comilla">Comilla</option>
        <option value="Cox'sBazar">Cox'sBazar</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Dinajpur">Dinajpur</option>
        <option value="Faridpur">Faridpur</option>
        <option value="Feni">Feni</option>
        <option value="Gaibandha">Gaibandha</option>
        <option value="Gazipur">Gazipur</option>
        <option value="Gopalganj">Gopalganj</option>
        <option value="Habiganj">Habiganj</option>
        <option value="Jaipurhat">Jaipurhat</option>
        <option value="Jamalpur">Jamalpur</option>
        <option value="Jessore">Jessore</option>
        <option value="Jhalokati">Jhalokati</option>
        <option value="Jhenaidah">Jhenaidah</option>
        <option value="Khagrachari">Khagrachari</option>
        <option value="Khulna">Khulna</option>
        <option value="Kishoreganj">Kishoreganj</option>
        <option value="Kurigram">Kurigram</option>
        <option value="Kushtia">Kushtia</option>
        <option value="Lakshmipur">Lakshmipur</option>
        <option value="Lalmonirhat">Lalmonirhat</option>
        <option value="Madaripur">Madaripur</option>
        <option value="Magura">Magura</option>
        <option value="Manikganj">Manikganj</option>
        <option value="Maulvibazar">Maulvibazar</option>
        <option value="Meherpur">Meherpur</option>
        <option value="Munshiganj">Munshiganj</option>
        <option value="Mymensingh">Mymensingh</option>
        <option value="Naogaon">Naogaon</option>
        <option value="Narail">Narail</option>
        <option value="Narayanganj">Narayanganj</option>
        <option value="Narsingdi">Narsingdi</option>
        <option value="Natore">Natore</option>
        <option value="Nawabganj">Nawabganj</option>
        <option value="Netrokona">Netrokona</option>
        <option value="Nilphamari">Nilphamari</option>
        <option value="Noakhali">Noakhali</option>
        <option value="Pabna">Pabna</option>
        <option value="Panchagarh">Panchagarh</option>
        <option value="Patuakhali">Patuakhali</option>
        <option value="Pirojpur">Pirojpur</option>
        <option value="Rajbari">Rajbari</option>
        <option value="Rajshahi">Rajshahi</option>
        <option value="Rangamati">Rangamati</option>
        <option value="Rangpur">Rangpur</option>
        <option value="Satkhira">Satkhira</option>
        <option value="Shariatpur">Shariatpur</option>
        <option value="Sherpur">Sherpur</option>
        <option value="Sirajganj">Sirajganj</option>
        <option value="Sunamganj">Sunamganj</option>
        <option value="Sylhet">Sylhet</option>
        <option value="Tangail">Tangail</option>
        <option value="Thakurgaon">Thakurgaon</option>
</select>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    
    
    
    
    
    
    
    </div>
  )
}

export default Contact