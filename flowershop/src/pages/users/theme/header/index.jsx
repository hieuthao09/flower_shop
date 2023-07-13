import { memo} from "react";
import './style.scss';
import {RiFacebookBoxLine,RiMailLine, RiInstagramLine,RiLinkedinBoxLine,RiTwitterLine,RiFileUserLine} from "react-icons/ri" ;
import { Link } from "react-router-dom";
import { formatter } from "../../../../utils/formatter";
import logo from '../../../../assets/users/logo.jpg'
import { IoBagHandleOutline } from "react-icons/io5";

const Header = () => {
    return (
        <>
         <div className="header_top">
        <div className="container">
             <div className="row">
                    <div className="col-6 header_top_left_pd header_top_left">
                        <ul>
                            <li>
                                <RiMailLine/>
                                <span>hieuthaowork00@gmail.com</span>
                            </li>
                            <li>
                                Free deliver {formatter(200000)}
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 header_top_right ">
                        <ul>
                            <li>
                            <Link to={""}><RiFacebookBoxLine/></Link>
                            </li>
                            <li>
                            <Link to={""}> <RiInstagramLine /></Link>

                            </li>
                            <li>
                            <Link to={""}><RiLinkedinBoxLine/></Link>
                            </li>
                            <li>
                            <Link to={""}><RiTwitterLine/></Link>
                            </li>
                            <li>
                            <Link to={""}><RiFileUserLine/></Link>
                            <span>Sign in</span> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
        <div className="container">
        <div className="row header-bottom header-bottom-12">
                    <div className="col-3 col-12">
                        <img  alt="" src={logo} className="img"/>
                    </div>
                    <div className="col-3 col-12 menu">
                        <ul>
                            <li>HOME</li>
                            <li>SHOP</li>
                            <li>PORTFOLIO</li>
                            <li>BLOG</li>
                        </ul>
                    </div>
                    <div className="col-12 bag">
                        <ul>
                            <li><IoBagHandleOutline/></li>
                            <li>CART({formatter(20000)}) </li>
                        </ul>
                    </div>
                </div>
                <div className="bg" >
                    <div className="text">
                    <h1>
                    <span>Tôi khuyên bạn</span> giống như<span> hoa dại </span>
                    </h1>
                    <h2>Hãy học cách sinh tồn </h2>
                    <h3>Trong mọi hoàn cảnh khắc nghiệt nhất</h3>
                    <p>Ngay cả khi người đời cho rằng bạn không thể</p>
                    <span className="author">- Hero Unknown -</span>
                    </div>
                  
                </div>
            </div>
        </>
    );
}
export default memo(Header);