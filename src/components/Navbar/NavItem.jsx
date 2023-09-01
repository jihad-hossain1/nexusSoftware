import { NavLink } from "react-router-dom";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  MobileNav,
} from "@material-tailwind/react";
import { MdDensityMedium } from "react-icons/md";
import { useEffect, useState } from "react";
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
            className="relative after:bg-orange after:absolute after:h-0.5 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 uppercase"
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
        <Button variant="outlined" onClick={handleOpen}>
          <MdDensityMedium className="text-xl"></MdDensityMedium>
        </Button>
        <Dialog
          size="xl"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none "
        >
          <Card className="mx-auto w-full h-screen   bg-gray-900 bg-opacity-20">
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
