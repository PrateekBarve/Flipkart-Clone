import { CardGiftcard, Help, Star, Work } from "@material-ui/icons"
import "./footer.scss"

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="card1">
            <p className="head">ABOUT</p>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Flipkart Stories</p>
            <p>Press</p>
            <p>Flipkart Wholesale</p>
            <p>Corporate Info</p>
        </div>
        <div className="card">
            <p className="head">HELP</p>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation & Refunds</p>
            <p>FAQ</p>
            <p>Report Infringement</p>
        </div>
        <div className="card">
            <p className="head">POLICY</p>
            <p>Return Policy</p>
            <p>Terms Of Use</p>
            <p>Security</p>
            <p>Privacy</p>
            <p>Sitemap</p>
            <p>EPR Compliance</p>
        </div>
        <div className="card">
            <p className="head">SOCIAL</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Youtube</p>
        </div>
        <div className="vertical"></div>
        <div className="a">
        <p className="head">Mail Us:</p>
            <p>Flipkart Internet Private Limited,<br/>

Buildings Alyssa, Begonia &<br/>

Clove Embassy Tech Village,<br/>

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,<br/>

Karnataka, India</p>
        </div>
        <div className="b">
        <p className="head">Registered Office Address:</p>
        <p>Flipkart Internet Private Limited,<br/>

Buildings Alyssa, Begonia &<br/>

Clove Embassy Tech Village,<br/>

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,<br/>

Karnataka, India<br/>

CIN : U51109KA2012PTC066107<br/>

Telephone: 044-45614700</p>
        </div>
      </div>

      <hr color="gray" size="0"/>

      <div className="bottom">
        <div className="foot-text">
            <Work className="icon"/>
            Become a Seller
        </div>
        <div className="foot-text">
            <Star className="icon"/>
            Advertise
        </div>
        <div className="foot-text">
            <CardGiftcard className="icon"/>
            Gift Cards
        </div>
        <div className="foot-text">
            <Help className="icon"/>
            Help Center
        </div>
        <div className="copyright">
            ©2007-2022 Flipkart.com
        </div>
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" alt=""/>
      </div>
    </div>
  )
}
