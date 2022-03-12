import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./DialogTodo.css";

function DialogTodo({ isOpen, handleOpenDialog, addTask }) {
  const [userInput, setUserInput] = useState("");
  const [userValue, setUserValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput, userValue);
    setUserInput("");
    setUserValue("");
  };
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleChangeNote = (e) => {
    setUserValue(e.currentTarget.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleOpenDialog}>
      <DialogTitle>Add new Todo</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Todo"
            variant="standard"
            onChange={handleChange}
            value={userInput}
            inputProps={{
              maxLength: 24,
            }}
          />

          <TextField
            label="Note"
            variant="standard"
            onChange={handleChangeNote}
            value={userValue}
            multiline
            minRows={4}
          />

          <DialogActions>
            <Button onClick={handleOpenDialog} color="primary">
              Close
            </Button>
            <Button
              disabled={userInput.length < 4}
              type="submit"
              color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default DialogTodo;
