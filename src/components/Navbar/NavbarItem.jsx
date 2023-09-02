import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  MenuItem,
} from "@material-tailwind/react";
import { MdClose } from "react-icons/md";

const NavbarItem = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button onClick={handleOpen}>Connect Wallet</Button>
      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-end">
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
            className=""
          >
            <MdClose className="text-3xl"></MdClose>
          </IconButton>
        </DialogHeader>
        <DialogBody className=" pr-2">
          <div className="mb-6">
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              Popular
            </Typography>
            <ul className="mt-1 -ml-2 flex flex-col gap-1 items-center justify-center">
              <MenuItem className="">
                <img
                  src="/icons/metamask.svg"
                  alt="metamast"
                  className="h-6 w-6"
                />
                <Typography
                  onClick={() => setOpen(!open)}
                  color="blue-gray"
                  variant="h6"
                >
                  MetaMask
                </Typography>
              </MenuItem>
            </ul>
          </div>
          <div>
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              More
            </Typography>
            <ul className="mt-1 -ml-2.5 flex flex-col gap-1">
              <MenuItem className="flex items-center gap-3">
                <img
                  src="/icons/trust-wallet.svg"
                  alt="metamast"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography color="blue-gray" variant="h6">
                  Trust Wallet
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-3">
                <img
                  src="/icons/argent-wallet.svg"
                  alt="metamast"
                  className="h-7 w-7 rounded-md border border-blue-gray-50"
                />
                <Typography color="blue-gray" variant="h6">
                  Coinbase Wallet
                </Typography>
              </MenuItem>
            </ul>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default NavbarItem;
