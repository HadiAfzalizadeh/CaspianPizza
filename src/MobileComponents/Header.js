import { Paper } from "@mui/material";
import { padding } from "@mui/system";
import { Component } from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export class Header extends Component {
  render() {
    return (
        <>
        <div style={{ width: '100%' , backgroundColor: "#FFC107"}}>
              <img
                style={{ width: "3.3rem", height: "auto" }}
                src="/logo.png"
                alt="logo"
              ></img>
            </div>
            {/* <div style={{ width: '100%' , backgroundColor: '#D32F2F' , padding: '0.25rem' , textAlign: 'center'}}> */}
                {/* <Paper style={{ height: '2rem' , borderRadius: '10rem' , backgroundColor: '#FFF9C4' }}>
                <InputBase
                          sx={{ ml: 1, flex: 1 }}
                          placeholder="Search"
                          inputProps={{ "aria-label": "search" }}
                        />
                        <IconButton
                          type="button"
                          sx={{ p: "10px" }}
                          aria-label="search"
                        >
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </IconButton>
                </Paper> */}
                {/* <Paper
                        component="form"
                        sx={{
                          p: "2px 4px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <InputBase
                          sx={{ ml: 1, flex: 1 }}
                          placeholder="Search"
                          inputProps={{ "aria-label": "search" }}
                        />
                        <IconButton
                          type="button"
                          sx={{ p: "10px" }}
                          aria-label="search"
                        >
                          <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </IconButton>
                      </Paper> */}
            {/* </div> */}
        </> 
    );
  }
}
