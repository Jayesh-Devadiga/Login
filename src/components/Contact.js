import { Typography } from "@material-ui/core";
import React from "react";

const Contact = () => {
  return (
    <div>
      <Typography variant="h5" style={{ textAlign: "center", marginBottom: "10px" }}>
        Contact Page
      </Typography>
      <Typography variant="body2">Email: Abc@gmail.com</Typography>

      <Typography variant="body2">Phone: 123456</Typography>
      <Typography variant="body2">Address: Nostrud proident ipsum cupidatat laboris labore anim nulla.</Typography>
    </div>
  );
};

export default Contact;
