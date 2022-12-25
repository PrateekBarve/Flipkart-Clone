import { ExpandMore, Search, ShoppingCart } from "@material-ui/icons";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
    <div className="container">
      <div className="left">
        <div>
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt=""/>
        <p className="logodes">
            <i>Explore Plus</i>
        </p>
        </div>
        <input type="search" className="searchform" placeholder="   Search for products, brands and more"/>
        
      </div>
      <div className="right">
        <div>
            <button type="submit" className="login-btn">Login</button>
            <span>Become a Seller</span>
            <span>More <ExpandMore className="icon1"/></span>
            <span><ShoppingCart className="icon2"/> Cart</span>
        </div>
      </div>
    </div>
    </div>
  )
}
