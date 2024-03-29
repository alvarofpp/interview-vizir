import React from "react";

// @material-ui/core components
import Snackbar from "@material-ui/core/Snackbar";

// @material-ui/lab components
import Alert from "@material-ui/lab/Alert";


export default ({open, handleClose, children, severity}) => (
  <Snackbar open={open}
            onClose={handleClose}
            message='Snackbar funcionando'
            autoHideDuration={2000}>

    <Alert onClose={handleClose}
           severity={severity}
           variante='filled'>
      {children}
    </Alert>
  </Snackbar>
);