import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Form() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [employee, setEmployee] = useState("");
  const [role, setRole] = useState("");
  const [rmcode, setRmcode] = useState("");
  const [img, setImg] = useState("");

  function handleImage(e) {
    const file = e.target.files[0]; // Get the selected file
    const imgURL = URL.createObjectURL(file);
    setImg(imgURL);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(img);
    console.log(name);
    console.log(contact);
    console.log(email);
    console.log(password);
    console.log(employee);
    console.log(role);
    console.log(rmcode);
  };

  return (
    <>
      <div className="register-box">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bg-white shadow-sm p-4">
                <p className="borderline"></p>
                <li>* All Fields are required</li>
                <br />
                {img && (
                  <img src={img} alt="Uploaded" style={{ width: "200px" }} />
                )}{" "}
                <br /> <br />
                <input type="file" className="mb-3" onChange={handleImage} />
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    id="school-name"
                    label=" Name"
                    variant="standard"
                    margin="normal"
                    className="label-font"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => { setName(e.target.value); }}
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <TextField
                        fullWidth
                        id="school-contact"
                        label="Contact Number"
                        type="number"
                        variant="standard"
                        margin="normal"
                        value={contact}
                        required
                        onChange={(e) => { setContact(e.target.value); }}
                      />
                    </div>
                    <div className="col-md-6">
                      <TextField
                        fullWidth
                        id="school-emailId"
                        label=" Email Id"
                        variant="standard"
                        margin="normal"
                        type="email"
                        value={email}
                        required
                        onChange={(e) => { setEmail(e.target.value); }}
                      />
                    </div>

                    <div className="col-md-6">
                      <TextField
                        fullWidth
                        id="classes"
                        label="Password"
                        variant="standard"
                        margin="normal"
                        value={password}
                        required
                        onChange={(e) => { setPassword(e.target.value); }}
                      />
                    </div>
                    <div className="col-md-6">
                      <TextField
                        fullWidth
                        id="Stream"
                        label="Employee ID"
                        variant="standard"
                        margin="normal"
                        type="text"
                        value={employee}
                        required
                        onChange={(e) => { setEmployee(e.target.value); }}
                      />
                    </div>
                    <div className="col-md-6">
                      <TextField
                        fullWidth
                        id="classes"
                        label="Roles"
                        variant="standard"
                        margin="normal"
                        value={role}
                        required
                        onChange={(e) => { setRole(e.target.value); }}
                      />
                    </div>
                    <div className="col-md-6">
                      <TextField
                        fullWidth
                        id="Stream"
                        label="RM Code"
                        variant="standard"
                        margin="normal"
                        value={rmcode}
                        required
                        onChange={(e) => { setRmcode(e.target.value); }}
                      />
                    </div>
                    <Button
                      variant="contained"
                      className="submit-btn mt-5"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
