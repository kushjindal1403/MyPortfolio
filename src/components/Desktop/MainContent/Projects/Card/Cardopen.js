import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const CardOpen = ({ open, handleOpen, title, description }) => {
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="custom-dialog md:w-[500px] rounded-lg shadow-lg bg-white p-5"
      >
        <div className="m-5 md:m-10">
          <DialogHeader className="text-md md:text-2xl font-bold text-gray-800">
            {title}
          </DialogHeader>
          <DialogBody className="text-sm md:text-xl text-gray-600">
            {description}
          </DialogBody>
          <DialogFooter>
            <Button onClick={handleOpen}>Close</Button>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
};

export default CardOpen;
