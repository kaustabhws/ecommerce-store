import Link from "next/link";
import Container from "./ui/container";
import logo from "../assets/logo.png";
import Image from "next/image";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-actions";
import Hamburger from "./hamburger";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-0 flex h-16 items-center">
          <Hamburger data={categories} />
          <Link
            href="/"
            className="ml-4 flex lg:ml-0 gap-x-2 max-[800px]:items-center max-[800px]:justify-center max-[800px]:w-full"
          >
            <div>
                <Image
                  src={logo}
                  alt="logo"
                  // layout="responsive"
                  objectFit="contain"
                  width={150}
                  height={150}
                />
            </div>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
