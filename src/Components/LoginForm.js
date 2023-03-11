import React, { useState } from "react";
import "./Title.css";
import { Typography } from "@material-ui/core";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

const LoginForm = () => {
  const [uname, setUname] = useState("");
  const [pwd, setPwd] = useState("");
  const [mail, setMail] = useState("");

  const UnameChange = (event) => {
    setUname(event.target.value);
  };

  const PwdChange = (event) => {
    setPwd(event.target.value);
  };

  const MailChange = (event) => {
    setMail(event.target.value);
  };

  const handleForm = (event) => {
    event.preventDefault();

    alert(`Username: ${uname} \nEmail: ${mail} \nPassword: ${pwd}`);
    setUname("");
    setPwd("");
    setMail("");
  };

  return (
    // <div className="form-container">
    //   <h2>Login Form yayyiee</h2>
    //   <form onSubmit={handleForm}>
    //     <label>
    //       Username: <input type="text" value={uname} onChange={UnameChange} />
    //     </label>
    //     <label>
    //       Email: <input type="email" value={mail} onChange={MailChange} />
    //     </label>

    //     <label>
    //       Password: <input type="password" value={pwd} onChange={PwdChange} />
    //     </label>
    //     <br />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>

    <div>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography
            variant="h3"
            style={{
              textAlign: "center",
              paddingTop: "50px",
              paddingBottom: "25px",
              fontWeight: "bold",
            }}
          >
            Login or Create an Account
          </Typography>
          <Box sx={{ width: "100%", paddingTop: "20px" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  style={{ paddingTop: "50px", paddingBottom: "20px" }}
                >
                  New Customer
                </Typography>
                <Divider sx={{ bgcolor: "grey.500", height: 2 }} />
                <div style={{ fontSize: "15px" }}>
                  <Typography
                    variant="h6"
                    style={{
                      paddingTop: "20px",
                      fontSize: "15px",
                      color: "lightgray",
                    }}
                  >
                    Registration is free and easy
                  </Typography>

                  <Typography
                    variant="h6"
                    style={{
                      paddingTop: "20px",
                      fontSize: "15px",
                      paddingLeft: "0px",
                    }}
                  >
                    <li>Faster Checkout</li>
                  </Typography>

                  <Typography
                    variant="h6"
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                    }}
                  >
                    <li>Save multiple shipping addresses</li>
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{
                      paddingTop: "15px",
                      paddingBottom: "190px",
                      fontSize: "15px",
                      paddingLeft: "0px",
                    }}
                  >
                    <li>View and track orders and more</li>
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    sx={{
                      textTransform: "none",
                      alignItems: "center",
                      marginBottom: "80px",
                    }}

                    style={{height:"45px" , width:"220px"}}
                    
                  >
                    Create an Account
                  </Button>
                </div>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="h6"
                  style={{ paddingTop: "50px", paddingBottom: "20px" }}
                >
                  Registered Customers
                </Typography>
                <Divider sx={{ bgcolor: "grey.500", height: 2 }} />
                <Typography
                  variant="h6"
                  style={{
                    paddingTop: "20px",
                    paddingBottom: "20px",
                    fontSize: "15px",
                    color: "lightgray",
                  }}
                >
                  if you have an account with us, please log in.
                </Typography>

                <Grid>
                  <label>
                    <Typography
                      variant="h6"
                      style={{
                        paddingBottom: "15px",
                        fontSize: "15px",
                      }}
                    >
                      Email Address*
                    </Typography>
                    <input type="text" />
                  </label>
                </Grid>

                <Grid style={{ marginTop: "40px", marginBottom: "60px" }}>
                  <label>
                    <Typography
                      variant="h6"
                      style={{
                        paddingBottom: "15px",
                        fontSize: "15px",
                      }}
                    >
                      Password*
                    </Typography>
                    <input type="email" />
                  </label>
                </Grid>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "none",
                    alignItems: "center",
                    marginBottom: "80px",
                  }}

                  style={{height:"45px" , width:"100px"}}
                 
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default LoginForm;
