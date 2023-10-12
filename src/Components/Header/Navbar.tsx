"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Logo from "../../Images/Uniclique.svg";
import dropDown from "../../Images/dropdown.svg";
import heartImage from "../../Images/heart.svg";
import loginImage from "../../Images/login.svg";
import searchImage from "../../Images/search.svg";
import "../../Styles/Navbar.css";
import { NavLink } from "./NavLink";

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      (menuRef.current as HTMLDivElement).classList.toggle("show__menu");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        if (headerRef.current) {
          (headerRef.current as HTMLElement).classList.add("header__shrink");
        }
      } else {
        if (headerRef.current) {
          (headerRef.current as HTMLElement).classList.remove("header__shrink");
        }
      }
    });

    // return () => window.removeEventListener("scroll",);
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <header className="d-flex justify-content-center">
        <nav className="nav containeR d-flex align-items-center justify-content-between">
          <div className="logo">
            <Link href="/home">
              {" "}
              <Image
                src={Logo}
                alt="logo"
                style={{ width: 65, marginTop: 10 }}
              />
            </Link>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              <NavLink href={"/"} exact>
                Home
              </NavLink>
              <div className="d-flex align-items-center flex-column sub">
                <div className="d-flex align-items-center gap-05 position-relative">
                  <NavLink href={"products"} exact>
                    Products
                  </NavLink>
                  <Image src={dropDown} alt="" />
                </div>
                <div className="d-flex align-items-center position-absolute dropDown ">
                  <NavLink href={"services"} exact>
                    Bags
                  </NavLink>
                  <NavLink href={"services"} exact>
                    Food
                  </NavLink>
                  <NavLink href={"services"} exact>
                    Books
                  </NavLink>
                  <NavLink href={"services"} exact>
                    Shoes
                  </NavLink>

                  <NavLink href={"services"} exact>
                    Clothes
                  </NavLink>

                  <NavLink href={"services"} exact>
                    Gadgets
                  </NavLink>
                  <NavLink href={"services"} exact>
                    Jewelleries
                  </NavLink>
                  <NavLink href={"services"} exact>
                    Skin Products
                  </NavLink>
                </div>
              </div>

              <div className="d-flex align-items-center flex-column sub">
                <div className="d-flex align-items-center gap-05 position-relative">
                  <NavLink href={"services"} exact>
                    Services
                  </NavLink>
                  <Image src={dropDown} alt="" />
                </div>
                <div className="d-flex align-items-center position-absolute dropDown ">
                  <NavLink href={"services"} exact>
                    Barber
                  </NavLink>
                  <NavLink href={"services"} exact>
                    Hair stylist
                  </NavLink>
                  <NavLink href={"services"} exact>
                    Photography
                  </NavLink>
                  <NavLink href={"services"} exact>
                    Makeup-Artist
                  </NavLink>

                  <NavLink href={"services"} exact>
                    Delivery service
                  </NavLink>

                  <NavLink href={"services"} exact>
                    Laundry service
                  </NavLink>
                  <NavLink href={"services"} exact>
                    Fashion Designing
                  </NavLink>
                </div>
              </div>
              <NavLink href={"/about"} exact>
                About
              </NavLink>
              <NavLink href={"/pricing"} exact>
                Pricing
              </NavLink>
            </div>
          </div>

          <div className="nav__right d-flex align-items-center justify-content-between gap-3">
            <div>
              <Link href="#product">
                <Image src={loginImage} alt="" />
              </Link>
            </div>

            <div style={{ cursor: "pointer" }}>
              <Image src={searchImage} alt="" />
            </div>

            <div style={{ cursor: "pointer" }}>
              <Image src={heartImage} alt="" />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
