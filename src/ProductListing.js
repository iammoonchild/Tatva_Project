import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { fontSize } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { useHistory } from 'react-router-dom';


import Button from "@mui/material/Button";


const useStyles = makeStyles({
  card: {
    minWidth: 200,
    margin: 30,
  },
  media: {
    position: 'relative',
    '&:hover': {
      '&::after': {
        content: 'attr(data-text)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        opacity: 1,
        transition: 'opacity 0.3s ease-in-out',
      },
      '& img': {
        opacity: 0.5,
        transition: 'opacity 0.3s ease-in-out',
      },
    },
  },
});

export default function ProductListing() {
  const classes = useStyles();

  const history = useHistory();

 

  return (
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
          History
        </Typography>

        <Divider  style={{borderColor:"red", borderBlockEndWidth:"3px",  borderRadius:"10px" ,width:"190px", margin:"auto", marginBottom:"50px"}}></Divider>

        {/* <Box sx={{ flexGrow: 1 }}>
          <AppBar
            elevation={0}
            position="static"
            style={{ backgroundColor: "white", color: "black"}}
          >
            <Toolbar style={{ display:"flex", justifyContent:"space-between"}}>
              <Typography
                variant="h6"
                style={{
                  paddingBottom: "15px",
                  fontSize: "15px",
                }}
              >
                Product Name - 14366 items
              </Typography>
              <div>
               <span style={{width:"100%", whiteSpace: "nowrap"}}>Sort By &nbsp;</span>
                <select id="catergories" name="description" style={{width:"200px"}}>
                  <option value="1">A - Z</option>
                  <option value="2">Rating</option>
                  <option value="3">Price</option>
                  <option value="4">Date</option>
                </select>
              </div>
            </Toolbar>
          </AppBar>
        </Box> */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            position: "static",
            justifyContent: "stretch",
            minWidth:"100%"
          }}
        >
          
          <Card
            className={classes.card}
            style={{ width: "210px",height:"480px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="https://cdn.xxl.thumbs.canstockphoto.com/check-mark-3d-people-man-person-showing-thumb-up-with-green-check-mark-in-box-stock-illustration_csp10450583.jpg"
                alt="green iguana"
                style={{
                  width: "223px",
                  height: "210px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Approved
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  variant="caption"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                 Approval refers to the process of granting authorization, consent, or endorsement to a request, proposal, action, or document.

                </Typography>
              </CardContent>          
              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "none",
                    alignItems: "center",
                  }}
                  style={{ width: "100%", paddingBottom: "10px" }}
                  type="submit"
                >
                  Approved
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{ width: "210px",height:"480px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="https://i.pinimg.com/564x/73/46/c5/7346c52ab369abbaa2262019847a5eee.jpg"
                m
                alt="green iguana"
                style={{
                  width: "210px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Declined
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  variant="caption"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                Decline is a process marked by a downward trajectory, often involving a reduction in quantity, quality, efficiency, or effectiveness over time.
                </Typography>
              </CardContent>
             
              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "none",
                    alignItems: "center",
                  }}
                  style={{ width: "100%", paddingBottom: "10px" }}
                  type="submit"
                >
                  Declined
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{width: "210px",height:"480px", borderRadius: "10px" }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                width="50%"
                image="https://media.istockphoto.com/id/1179967286/vector/text-file-or-document-comments-and-remarks-vector-illustration-flat-cartoon-warning-or.jpg?s=612x612&w=0&k=20&c=0WXQN8Ygi-ifcRay_SXfJmv0M-G8zeXX5TpoX-jSR7g="
                m
                alt="green iguana"
                style={{
                  width: "210px",
                  height: "200px",
                  backgroundColor: "black",
                }}
              />
              <CardContent>
                <Typography variant="h6" style={{ margin: "0px" }}>
                  Remarked
                </Typography>
                <Typography
                  variant="subtitle1"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                  
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  variant="caption"
                  style={{
                    color: "gray",
                    fontWeight: "bold",
                  }}
                >
                 This remark can serve various purposes, offering feedback or suggestions, providing or seeking approval or disapproval.
                </Typography>
              </CardContent>
              
              <CardContent>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    textTransform: "none",
                    alignItems: "center",
                  }}
                  style={{ width: "100%", paddingBottom: "10px" }}
                  type="submit"
                >
                  Remarked
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
          
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              marginBottom: "80px",
            }}
          >
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
