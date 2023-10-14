import Image from "next/image";
import Logo from "../../Images/Uniclique.svg";
import facebook from "../../Images/facebook.svg";
import instagram from "../../Images/instagram.svg";
import twitter from "../../Images/twitter.svg";
import "../../Styles/home.css";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center">
      <section className="containeR d-flex justify-content-between flex-wrap mb-5 gap-3">
        <div className="footerItem">
          <Image src={Logo} alt="logo" style={{ width: 65 }} />

          <div className="d-flex align-items-center gap-1 mt-1">
            <Image src={facebook} alt="facebook" />
            <Image src={instagram} alt="instagram" />
            <Image src={twitter} alt="twitter" />
          </div>

          <p className="footerSubLink mt-2">
            &copy; {new Date().getFullYear()} Uniclique. <br></br>All Rights
            Reserved
          </p>
        </div>
        <div className="footerItem">
          <h5 className="footerLink">Products</h5>
          <div className="footerSubLink">
            <li>Shoes</li>
            <li>Jewelleries</li>
            <li>Gadgets</li>
            <li>Skincare Products</li>
            <li>Bags</li>
            <li>Food</li>
            <li>Clothes</li>
            <li>Books</li>
          </div>
        </div>
        <div className="footerItem">
          <h5 className="footerLink">Services</h5>
          <div className="footerSubLink">
            <li>Photography</li>
            <li>Barber</li>
            <li>Makeup artist</li>
            <li>Fashion Designing</li>
            <li>Hair Stylist</li>
            <li>Delivery Service</li>
            <li>Laundry Service</li>
          </div>
        </div>
        <div className="footerItem">
          <h5 className="footerLink">Contacts</h5>
          <div className="footerSubLink">
            <li>+234 7043 56787</li>
            <li>uniclique@gmail.com</li>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
