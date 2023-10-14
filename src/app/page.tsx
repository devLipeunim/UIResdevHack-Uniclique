"use client";
import Categories from "@component/Components/Card/Categories";
import { Products, dataCollection } from "@component/Data/data";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import bullet from "../Images/bullet.svg";
import heroImage from "../Images/hero_image.svg";
import "../Styles/home.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [category, setCategory] = useState("Shoe");
  const [service, setService] = useState("Photography");
  const [allProducts, setAllProducts] = useState(Products);
  const [allServices, setAllServices] = useState(Products);
  useEffect(() => {
    if (category === "Shoe") {
      const filteredShoe = Products.filter((item) => item.category === "Shoe");
      setAllProducts(filteredShoe);
    }

    if (category === "Jewelleries") {
      const filteredJewelleries = Products.filter(
        (item) => item.category === "Jewelleries"
      );
      setAllProducts(filteredJewelleries);
    }

    if (category === "Gadgets") {
      const filteredGadgets = Products.filter(
        (item) => item.category === "Gadgets"
      );
      setAllProducts(filteredGadgets);
    }

    if (category === "SkinProducts") {
      const filteredSkinProducts = Products.filter(
        (item) => item.category === "SkinProducts"
      );
      setAllProducts(filteredSkinProducts);
    }

    if (category === "Bags") {
      const filteredBags = Products.filter((item) => item.category === "Bags");
      setAllProducts(filteredBags);
    }

    if (category === "Books") {
      const filteredBooks = Products.filter(
        (item) => item.category === "Books"
      );
      setAllProducts(filteredBooks);
    }

    if (category === "Clothes") {
      const filteredClothes = Products.filter(
        (item) => item.category === "Clothes"
      );
      setAllProducts(filteredClothes);
    }

    if (category === "Foods") {
      const filteredFoods = Products.filter(
        (item) => item.category === "Foods"
      );
      setAllProducts(filteredFoods);
    }

    if (service === "Photography") {
      const filteredPhotography = Products.filter(
        (item) => item.category === "Photography"
      );
      setAllServices(filteredPhotography);
    }

    if (service === "Barber") {
      const filteredBarber = Products.filter(
        (item) => item.category === "Barber"
      );
      setAllServices(filteredBarber);
    }

    if (service === "MakeupArtist") {
      const filteredMakeupArtist = Products.filter(
        (item) => item.category === "MakeupArtist"
      );
      setAllServices(filteredMakeupArtist);
    }

    if (service === "Fashion") {
      const filteredFashion = Products.filter(
        (item) => item.category === "Fashion"
      );
      setAllServices(filteredFashion);
    }

    if (service === "HairStylist") {
      const filteredHairStylist = Products.filter(
        (item) => item.category === "HairStylist"
      );
      setAllServices(filteredHairStylist);
    }
    if (service === "Delivery") {
      const filteredDelivery = Products.filter(
        (item) => item.category === "Delivery"
      );
      setAllServices(filteredDelivery);
    }

    if (service === "Laundry") {
      const filteredLaundry = Products.filter(
        (item) => item.category === "Laundry"
      );
      setAllServices(filteredLaundry);
    }
  }, [category, service]);
  const [accordion, setActiveAccordion] = useState(0);
  function toggleAccordion(index: number) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <main className="d-flex  justify-content-center flex-column width-100">
      <section className="d-flex  justify-content-center mt-2">
        <div className="containeR d-flex flex-wrap align-items-center justify-content-between hero">
          <div
            className="d-flex flex-column width-50 left"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1 className="heroTitle position-relative ">
              University Retail made Easy right at your Fingertips.{" "}
             
            </h1>
            <h1 className=" creating  position-absolute mt-5">
                <Typewriter
                  options={{
                    strings: [
                      "Made for Unibadan, by Unibadan.",
                      "Made for Shopping.",
                      "Made for Students Enterpreneurs.",
                      "Made for Food Vendors.",
                      "Made for Delivery Services.",
                      "Made for Fashion Designers.",
                      "Made for Event Promotions.",
                    ],
                    autoStart: true,

                    loop: true,
                  }}
                />
              </h1>

            <p className="mt-5 subTitle">
              {" "}
              Discover a tailor-made website for your business – shop and sell
              with ease from those you know and trust!
            </p>

            <div className="mt-3 flex-wrap d-flex gap-2">
              <button className="cta">Get Started</button>
              <button className="cta2  ctaG">Learn more</button>
            </div>
          </div>

          <div>
            <Image src={heroImage} alt="" className="heroImage"   />
          </div>
        </div>
      </section>

      <section className="d-flex  justify-content-center" id="product">
        <div className="containeR hero">
          <h1 data-aos="fade-up">Products we offer on Uniclique</h1>
          <ul
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="d-flex align-items-center justify-content-center mt-2 categories"
          >
            <li
              className={`${category === "Shoe" ? "BtnActive" : ""} `}
              onClick={() => setCategory("Shoe")}
            >
              Shoes
            </li>
            <li
              className={`${category === "Jewelleries" ? "BtnActive" : ""} `}
              onClick={() => setCategory("Jewelleries")}
            >
              Jewelleries
            </li>
            <li
              className={`${category === "Gadgets" ? "BtnActive" : ""} `}
              onClick={() => setCategory("Gadgets")}
            >
              Gadgets
            </li>
            <li
              className={`${category === "SkinProducts" ? "BtnActive" : ""} `}
              onClick={() => setCategory("SkinProducts")}
            >
              Skin Products
            </li>
            <li
              className={`${category === "Bags" ? "BtnActive" : ""} `}
              onClick={() => setCategory("Bags")}
            >
              Bags
            </li>
            <li
              className={`${category === "Foods" ? "BtnActive" : ""} `}
              onClick={() => setCategory("Foods")}
            >
              Food
            </li>
            <li
              className={`${category === "Clothes" ? "BtnActive" : ""} `}
              onClick={() => setCategory("Clothes")}
            >
              Clothes
            </li>
            <li
              className={`${category === "Books" ? "BtnActive" : ""} `}
              onClick={() => setCategory("Books")}
            >
              Books
            </li>
          </ul>

          {allProducts.map((item) => (
            <Categories key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="d-flex justify-content-center" id="services">
        <div className="containeR">
          <h1 data-aos="fade-up">Services we offer on Uniclique</h1>
          <ul
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="d-flex align-items-center justify-content-center mt-2 categories"
          >
            <li
              className={`${service === "Photography" ? "BtnActive" : ""} `}
              onClick={() => setService("Photography")}
            >
              Photography
            </li>
            <li
              className={`${service === "Barber" ? "BtnActive" : ""} `}
              onClick={() => setService("Barber")}
            >
              Barber
            </li>
            <li
              className={`text-center ${
                service === "MakeupArtist" ? "BtnActive" : ""
              } `}
              onClick={() => setService("MakeupArtist")}
            >
              Makeup Artist
            </li>
            <li
              className={`text-center ${
                service === "Fashion" ? "BtnActive" : ""
              } `}
              onClick={() => setService("Fashion")}
            >
              Fashion Designing
            </li>
            <li
              className={`text-center ${
                service === "HairStylist" ? "BtnActive" : ""
              } `}
              onClick={() => setService("HairStylist")}
            >
              Hair Stylist
            </li>
            <li
              className={`text-center ${
                service === "Delivery" ? "BtnActive" : ""
              } `}
              onClick={() => setService("Delivery")}
            >
              Delivery Services
            </li>
            <li
              className={`text-center ${
                service === "Laundry" ? "BtnActive" : ""
              } `}
              onClick={() => setService("Laundry")}
            >
              Laundry Service
            </li>
          </ul>

          {allServices.map((item) => (
            <Categories key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section className="d-flex  justify-content-center">
      <div className="containeR d-flex justify-content-between flex-wrap">
        <div className="d-flex flex-column width-50 left">
          <h1 data-aos="fade-up">What we offer to boost your business </h1>
          <div data-aos="fade-up">
            <div className="d-flex align-items-center gap-3 mt-3">
              <Image src={bullet} alt="bullet" width={20} />
              <h4 className="points"> Brading</h4>
            </div>

            <p className="mt-1 subPoints">
              Elevate your business’s identity with our platform. Cultivate a
              distinct brand presence, connect with students and and stand out
              in the competitve marketplace for lasting success.
            </p>
          </div>

          <div data-aos="fade-up">
            <div className="d-flex align-items-center gap-3 mt-3">
              <Image src={bullet} alt="bullet" width={20} />
              <h4 className="points"> Marketing</h4>
            </div>

            <p className="mt-1 subPoints">
              Unlock your business’s full potential, reach a vast student
              audience, boost visibility and thrive with seamless marketing and
              sales opportunity .
            </p>
          </div>

          <div data-aos="fade-up">
            <div className="d-flex align-items-center gap-3 mt-3">
              <Image src={bullet} alt="bullet" width={20} />
              <h4 className="points">Order management</h4>
            </div>

            <p className="mt-1 subPoints">
              Simplify and streamline order management for your university
              business from processing to fulfilment, take control and enhance
              customer satisfaction with ease.
            </p>
          </div>

          <div data-aos="fade-up">
            <div className="d-flex align-items-center gap-3 mt-3">
              <Image src={bullet} alt="bullet" width={20} />
              <h4 className="points">Online store creation</h4>
            </div>

            <p className="mt-1 subPoints">
              Create your dream online store effortlessly. showcase your
              products, engage students and launch a thriving digital storefront
              that drives success
            </p>
          </div>

          <div className="mt-3 flex-wrap d-flex gap-2" data-aos="fade-up">
            <button className="cta">Get Started</button>
            <button className="cta2  ctaG">Learn more</button>
          </div>
        </div>
        <div
          className="aboutImage width-50"
          
        ></div>
      </div>
      </section>
  


      <div className="faqBg mt-5 d-flex justify-content-center">
        <div className="containeR faq">
          <h4 className="mb-4"   data-aos="fade-up">Frequently Ask Questions (FAQ)</h4>
          <div className="accordion-faq">
            {dataCollection.map((item, index) => {
              return (
                <div
                  data-aos="fade-up"
                  key={index}
                  onClick={() => toggleAccordion(index)}
                >
                  <div
                    className="d-flex align-items-center justify-content-between"
                    style={{ cursor: "pointer" }}
                  >
                    <h4
                      className={`points ${
                        accordion === index ? "active" : ""
                      }`}
                    >
                      {item.question}
                    </h4>

                    <div>
                      {accordion === index ? (
                        <span className="verticle d-flex align-items-center justify-content-center">
                          -
                        </span>
                      ) : (
                        <span className="verticle d-flex align-items-center justify-content-center">+</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <p
                      className={`mt-3 faqSubPoints  ${
                        accordion === index ? "active" : "inactive"
                      }`}
                    >
                      {item.answer}
                    </p>
                  </div>

                  <div className="line mb-4 mt-3"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
