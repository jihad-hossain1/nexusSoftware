import { NavLink } from "react-router-dom";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  IconButton,
  DialogHeader,
} from "@material-tailwind/react";
import { MdDensityMedium, MdClose } from "react-icons/md";
import { useState } from "react";
const data = [
  {
    label: "Home",
    title: "/",
  },
  {
    label: "Works",
    title: "/works",
  },
  {
    label: "Technologies",
    title: "/technologies",
  },
  {
    label: "Services",
    title: "/services",
  },
  {
    label: "Company",
    title: "/company",
  },
  {
    label: "Contacts",
    title: "/contacts",
  },
];
const NavItem = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      {/* large device  */}
      <ul className="md:flex space-x-5 hidden">
        {data.map(({ label, title }) => (
          <li
            key={label}
            value={label}
            className="relative after:bg-orange after:absolute after:h-0.5 after:w-0 after:bottom-0  after:left-0  hover:after:w-full after:transition-all after:duration-500 uppercase"
          >
            <NavLink
              to={title}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline underline-offset-[6px] decoration-3 decoration-orange"
                  : ""
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
      {/* mobile device  */}
      <div className="block md:hidden">
        <button
          className="bg-black rounded-md shadow-sm hover:shadow px-3 py-2"
          onClick={handleOpen}
        >
          <MdDensityMedium className="text-xl text-white"></MdDensityMedium>
        </button>
        <Dialog
          size="xl"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none "
        >
          <DialogHeader className="justify-end">
            <IconButton
              color="blue-gray"
              size="sm"
              variant="text"
              onClick={handleOpen}
              className=""
            >
              <MdClose className="text-3xl text-white"></MdClose>
            </IconButton>
          </DialogHeader>
          <Card className="mx-auto w-full h-screen   bg-black bg-opacity-10">
            <CardBody className="flex flex-col gap-4">
              <ul className="flex flex-col items-center justify-center space-y-4 mt-44">
                {data.map(({ label, title }) => (
                  <li
                    key={label}
                    value={label}
                    className="relative after:bg-orange after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 uppercase inline-block text-white"
                  >
                    <NavLink
                      onClick={() => setOpen(!open)}
                      to={title}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? " underline underline-offset-[6px] decoration-3 decoration-orange"
                          : ""
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </Dialog>
      </div>
    </>
  );
};

export default NavItem;
