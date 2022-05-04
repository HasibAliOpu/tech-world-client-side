import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-4 gap-10 p-12 tracking-wide text-lg">
        <div>
          <h1 className="font-semibold font-mono text-xl mb-5">
            Store Location
          </h1>
          <div>
            <p>500 Terry Francois Street</p>
            <p className="pt-1">San Francisco, CA 94158</p>
            <p className="py-1">techWorld@gmail.com</p>
            <p>123-456-7890</p>
          </div>
          <div className="flex w-6 mt-7 gap-4">
            <img
              src="https://i.ibb.co/x31jMvx/icons8-facebook-50.png"
              alt="facebookIcon"
            />
            <img
              src="https://img.icons8.com/ios/50/000000/instagram-new--v1.png"
              alt="instagramIcon"
            />
            <img
              src="https://i.ibb.co/Z2qmHCt/icons8-youtube-50.png"
              alt="youtubeIcon"
            />
            <img
              src="https://i.ibb.co/QvX66Yd/icons8-twitter-50.png"
              alt="twitterIcon"
            />
          </div>
        </div>
        <div>
          <h1 className="font-semibold font-mono text-xl mb-5">Shop</h1>
          <div>
            <p className="hover:text-purple-500">Shop All</p>
            <p className="hover:text-purple-500">Computers</p>
            <p className="hover:text-purple-500">Tablets</p>
            <p className="hover:text-purple-500">Drones & Cameras</p>
            <p className="hover:text-purple-500">Audio</p>
            <p className="hover:text-purple-500">Mobile</p>
            <p className="hover:text-purple-500">T.V & Home Cinema</p>
            <p className="hover:text-purple-500">Wearable Tech</p>
            <p className="hover:text-purple-500">Sale</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold font-mono text-xl mb-5">
            Customer Support
          </h1>
          <div>
            <p>Contact Us</p>
            <p>Help Center</p>
            <p>About Us</p>
            <p>Careers</p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold font-mono text-xl mb-5 ">Policy</h1>
          <div>
            <p>Shipping & Returns</p>
            <p className="pt-1">Terms & Conditions</p>
            <p className="py-1">Payment Methods</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
      <div className="border border-blue-300 mx-10 my-5" />
      <div>
        <h1 className="text-center">We accept the following paying methods</h1>
        <span className="flex justify-center gap-10 my-9">
          <img
            src="https://static.wixstatic.com/media/84770f_27001c40036842889a78a72766ad4700~mv2.png/v1/fill/w_55,h_33,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Visa.png"
            alt="visa"
          />
          <img
            src="https://static.wixstatic.com/media/c837a6_e8798fcfdaf144478a5c7da1ba28ff2c~mv2.png/v1/fill/w_55,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-mastercard%403x.png"
            alt="mastercard"
          />
          <img
            src="https://static.wixstatic.com/media/c837a6_2bd3e20d1e214eccb5e106fc6d1f535d~mv2.png/v1/fill/w_55,h_29,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-amex%403x.png"
            alt="americanExpress"
          />
          <img
            src="https://static.wixstatic.com/media/c837a6_52115f99af28419d95a951f226e32e2b~mv2.png/v1/fill/w_55,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-chinaunionpay%403x.png"
            alt="unionPay"
          />
          <img
            src="https://static.wixstatic.com/media/c837a6_9378fbd3ef8c470bb89aee12ecbd2209~mv2.png/v1/fill/w_55,h_34,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/brand-jcb%403x.png"
            alt="JCB"
          />
          <img
            src="https://static.wixstatic.com/media/84770f_70555dcb450a415d80322cb8d7e82a33~mv2.png/v1/fill/w_52,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Diners.png"
            alt="DinnersClub"
          />
          <img
            src="https://static.wixstatic.com/media/84770f_14f105815c3f47bf9001990706915501~mv2.png/v1/fill/w_55,h_35,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Discover.png"
            alt="discover"
          />
          <img
            src="https://static.wixstatic.com/media/84770f_8445424a46ca49f39359bf19d4a3e537~mv2.png/v1/fill/w_55,h_38,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/PayPal.png"
            alt="payPal"
          />
        </span>
      </div>
      <div className="flex justify-center items-center gap-1 bg-slate-300 py-3">
        <FontAwesomeIcon icon={faCopyright} />
        <p>{new Date().getFullYear()} by TechWorld. Design by FWD_opu</p>
      </div>
    </div>
  );
};

export default Footer;
