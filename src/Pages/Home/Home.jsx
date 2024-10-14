import React from 'react'
import "./Home.css"
import JournalIcon from "../../assets/journal-icon.png"
import BagIcon from "../../assets/bag-icon.png"
import ShirtIcon from "../../assets/shirt-icon.png"
import SockSIcon from "../../assets/socks-icon.png"
import QualityAssurance from "../../assets/quality-assurance.png"
import OnlinePayment from "../../assets/online-payment.png"
import SpeedyDelivery from "../../assets/speedy-delivery.png"
import NewStock from "../../assets/new-stock.png"
import Product from '../../Components/Product/Product'
import AdvertBanner from "../../assets/advertBanner.png"
import AdvertBannerSlide1 from "../../assets/advertBannerSlide1.png"
import AdvertBannerSlide2 from "../../assets/advertBannerSlide2.png"
import DidYouKnow from "../../assets/didYouKnow.png"
import FlippedProduct from "../../Components/FlippedProduct/FlippedProduct"

const Home = () => {
  return (
    <div className='container'>
        <div className="category">
            <p className='cat'>Category:</p>
            <div className="subcatcontainer"><img src={ShirtIcon} alt="Image1" /><p className='subcategory'> Clothing</p></div>
            <div className="subcatcontainer"><img src={SockSIcon} alt="Image2" /><p className='subcategory'>  Socks</p></div>
            <div className="subcatcontainer"><img src={BagIcon} alt="Image" /><p className='subcategory'> Bags</p> </div>
            <div className="subcatcontainer"><img src={JournalIcon} alt="" /><p className='subcategory'>Journal</p></div>
        </div>
        <div>
            <img src={AdvertBanner} alt="Advert Banner" className='advertBanner'/>
        </div>
        <div className="fourColumn">
            <div className="onlinePayment posk-feat">
                <img src={OnlinePayment} alt="Image1" className='posk-feat-img' />
                <div>
                    <p className='title'>Payment Online</p>
                    <p className='desc-para'>Enjoy secure and hassle free transactions now.</p>
                </div>
            </div>
            <div className="newStock posk-feat">
                <img src={NewStock} alt="Image2" className='posk-feat-img'/>
                <div>
                    <p className='title'>New stock and sales</p>
                    <p className='desc-para'>Stay ahead with the latest arrival and unbeatable discount on top sports wear</p>
                </div>
            </div>
            <div className="qualityAssurance posk-feat">
                <img src={QualityAssurance} alt="Image3" className='posk-feat-img'/>
                <div>
                    <p className='title'>Quality assurance</p>
                    <p className='desc-para'>Crafted with premium material to enjoy lasting perfomance and comfort</p>
                </div>
            </div>
            <div className="speedyDelivery posk-feat">
                <img src={SpeedyDelivery} alt="Image4" className='posk-feat-img' />
                <div>
                    <p className='title'>Speedy Delivery</p>
                    <p className='desc-para'>Get your favourite software delivered fast, right to your door step</p>
                </div>
            </div>
        </div>
        <div className="newProduct">
        <Product title = "New Products" description = "Checkout some of the new wears arriving today"/>
        </div>
        <div className="advertBannerSlide">
            <img src={AdvertBannerSlide1} alt="AdvertSlide1" className='advertBannerSlideImg'/>
            <img src={AdvertBannerSlide2} alt="AdvertSlide1" className='advertBannerSlideImg'/>
        </div>
        <Product title = "Shoe Collection" description = "Checkout some of the new wears arriving today"/>
        <div>
            <img src={DidYouKnow} alt="Fun Fact" className="didYouKnow"/>
        </div>
        <FlippedProduct/>
    </div>
  )
}

export default Home;