import { memo} from "react"
import Slider from "./slider";
import Card from "./card";
import productDetail from "data/product/data.js"
const ProfilePage = () => {
    return (
        <>
            <div className="body">
                <div className="menu">

                </div>
                <div className="search">
                    <Card data={productDetail}></Card>
                </div>
                <div className="menu">

                </div>
                <div className="slider">
                <Slider></Slider>
                </div>
                <div className="">

                </div>
            </div>
        </>
    );
}
export default memo(ProfilePage);