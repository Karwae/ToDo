import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function DisplayTodo({ isOpen, handleOpenTodo, formTodo }) {
  return (
    <Dialog open={isOpen} onClose={handleOpenTodo}>
      <DialogTitle>You Todo</DialogTitle>
      <DialogContent>
        <div>
          <h2>{formTodo.title}</h2>
          <div className='viewTask'>{formTodo.task}</div>
        </div>
      </DialogContent>
      <DialogActions>
        <div>
          <Button onClick={handleOpenTodo} color="primary">
            Close
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  );
}

export default DisplayTodo;
