import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Offers from "../../components/offers/Offers";
import "./home.scss";

export default function Home() {
  return (
    <div className="container">
      <Navbar/>
      <Categories/>
      <Offers/>
      <List/>
      <List/>
      <List/>
      <List/>
      <Footer/>
    </div>
  )
}
