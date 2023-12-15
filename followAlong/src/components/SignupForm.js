import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { useForm } from "../hooks/useForm";
import Button from "./../theme/Button";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const initialFormValues = {
  email: "",
  username: "",
};

export default function SignupForm() {
  console.log("*** SignUpForm COMPONENT ***");
  const classes = useStyles();

  const formCallback = () => {
    console.log(values);
    alert(`${values.username} ${values.email}`);
  };

  const [values, clearForm, handleSubmit, handleChanges] = useForm(
    "signUpForm",
    initialFormValues,
    formCallback
  );

  console.log("values =>", values);
  console.log("clearForm =>", clearForm);
  console.log("handleSubmit =>", handleSubmit);
  console.log("handleChanges =>", handleChanges);

  console.log("*** SignUpForm COMPONENT END ***");
  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="Username"
            className={classes.textField}
            value={values.username}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="username"
          />
          <TextField
            id="outlined-name"
            label="Email"
            className={classes.textField}
            value={values.email}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
            name="email"
          />
          <Button color="blue" type="submit">
            Submit
          </Button>
          <Button color="red" onClick={clearForm}>
            Clear
          </Button>
        </fieldset>
      </form>
    </div>
  );
}
