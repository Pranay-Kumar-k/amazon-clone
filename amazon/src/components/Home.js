import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"/> 

            {/* product id, title, price, rating , image */}
            <div className="home__row"> 
            <Product id="123456" title="cotton double bedsheets sdjfhbasndmfasdiohljbasdhvghjbaknsdogiasvjdb mansdghvjb asdjlahgskvdbm "
                price={11}
                rating={5}
                image = "https://m.media-amazon.com/images/I/81+hG1NJb6L._AC_UL320_.jpg"
            />
            <Product id="123456" title="OPPO F17 Pro (Metallic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                price={11}
                rating={5}
                image = "https://images-na.ssl-images-amazon.com/images/I/61lKU7ZIOQL._SY741_.jpg"
            />
            </div>
            <div className="home__row">
                <Product id="123456" title="HP 14s core i5 10th Gen 14 inch FHD Laptop (8 GB/256 GB SSD/1TB HDD/Windows 10/MS Office 2019/Natural Silver /1.43kg) 14s-cr2000tu "
                    price={11}
                    rating={5}
                    image = "https://m.media-amazon.com/images/I/81Nox3hzQaL._AC_SS350_.jpg"
                />
                <Product id="123456" title="HP 14s core i5 10th Gen 14 inch FHD Laptop (8 GB/256 GB SSD/1TB HDD/Windows 10/MS Office 2019/Natural Silver /1.43kg) 14s-cr2000tu"
                    price={11}
                    rating={5}
                    image = "https://m.media-amazon.com/images/I/81Nox3hzQaL._AC_SS350_.jpg"
                />
                <Product id="123456" title="HP 14s core i5 10th Gen 14 inch FHD Laptop (8 GB/256 GB SSD/1TB HDD/Windows 10/MS Office 2019/Natural Silver /1.43kg) 14s-cr2000tu"
                    price={11}
                    rating={5}
                    image = "https://m.media-amazon.com/images/I/81Nox3hzQaL._AC_SS350_.jpg"
                />
            </div>
            <div className="home__row">
            
            <Product id="123456" title="LG 139 cm (55 inches) 4K Ultra HD Smart OLED TV 55CXPTA (Dark Steel Silver) (2020 Model) 4K Ultra HD Smart OLED TV 55CXPTA (Dark Steel Silver) (2020 Model)"
                price={11}
                rating={5}
                image = "https://www.lg.com/in/images/tvs/md06116737/Thumb_350.jpg"
            />
            </div>
            {/* product */}
        </div>
    )
}

export default Home
