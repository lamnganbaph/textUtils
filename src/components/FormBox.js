import React, { useState } from "react";
import { Form, Button, Card ,Alert } from "react-bootstrap";
// import AlertMsg from "./AlertMsg";

export default function FormBox() {

//   const showAlert = (message, type)=>{
//     setAlert({
//       msg: message,
//       type: type
//     })
//     setTimeout(() => {
//         setAlert(null);
//     }, 1500);
// }

  let [this_alert,set_this_alert] = useState("No data available");
  let [this_key,set_this_key] =useState('warning');
  let [this_varient,set_this_varient] =useState('warning');

  function handleOnChange(event) {
    // e.preventDefault();
    setData(event.target.value);
    set_this_key("success");
    set_this_varient("success");
  }
  function handleUppercase() {
    let new_data = data.toUpperCase();
    setData(new_data);
    set_this_alert("data converted to uppercase");
    
  }
  function handleLowercase() {
    let new_data = data.toLowerCase();
    setData(new_data);
    set_this_alert("data converted to lowercase");
  }
  function HandleClearData() {
    let new_data = "";
    setData(new_data);

    set_this_alert("data cleared");
  }
  function HandleCopy() {
    navigator.clipboard.writeText(data);

    set_this_alert("data copied to clipboard");
  }
  function HandleExtraSpace() {
    let new_data = data.split(/[ ]+/);
    setData(data.join(" "));
    
    set_this_alert("removed extra spaces");
  }
  const [data, setData] = useState("");
  return (
    <>
      {/* <AlertMsg alertmessage={this_alert} key_alert={this_key} variant_alert={this_varient} />
       */}
        <Alert key={this_key} variant={this_varient}>
        {this_alert}
      </Alert>
      <Form>
        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group> */}
        <Form.Group
          className="mb-2"
          controlId="exampleForm.ControlTextarea1"
          style={{ width: "80vw", display: "inline-block" }}
        >
          <Form.Label>Paste your Text Here</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={data}
            onChange={handleOnChange}
            placeholder={data}
            // showAlert={showAlert}
          />
        </Form.Group>
      </Form>

      <div>
        <Button variant="primary" className="my-2" onClick={handleUppercase}>
          Convert to UpperCase
        </Button>{" "}
        <Button variant="primary" className="my-2" onClick={handleLowercase}>
          Convert to LowerCase
        </Button>{" "}
        <Button variant="primary" className="my-2" onClick={HandleClearData}>
          Clear Text
        </Button>{" "}
        <Button variant="primary" className="my-2" onClick={HandleCopy}>
          Copy Text
        </Button>{" "}
        <Button variant="primary" className="my-2" onClick={HandleExtraSpace}>
          Remove Extra Spaces
        </Button>{" "}
      </div>

      <div className="py-5" style={{ width: "80vw", display: "inline-block" }}>
        <Card>
          <Card.Header as="h5">Results</Card.Header>
          <Card.Body>
            <Card.Title>Total No of words is {data.length}</Card.Title>
            {/* <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text> */}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
