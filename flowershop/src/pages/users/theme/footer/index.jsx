import { memo} from "react"
import './style.scss';
const Footer = () => {
    return (
        <>
        <div className="footer">
                <div className="container" >
                    <div className="row footer-top">
                    <div className="col-3 ">
                    <ul className="title">
                        <li>
                               CUSTOMER SERVICE
                            </li>
                        </ul>
                    <ul className="end-title">
                           
                            <li>
                                Help & Contact Us
                               
                            </li>
                            <li>
                            Returns & Refunds
                                
                            </li>
                            <li>
                            Online Stores
                            </li>
                            <li>                       
                                Terms & Conditions                               
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                    <ul className="title">
                    <li>
                               COMPANY
                            </li>
                        </ul>
                    <ul className="end-title">
                            
                            <li>
                            About Us
                            </li>
                            <li>
                            Blog
                            </li>
                            <li>
                            Order Tracking
                            </li>
                            <li>
                            FAQ Page
                            </li>
                            <li>                       
                            Contact Us
                            </li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <ul className="title">
                            <li>SOCIAL MEDIA</li>
                        </ul>
                    <ul className="end-title">
                            <li>
                            Twitter

                            </li>
                            <li>
                            Instagram

                            </li>
                            <li>
                            Tumblr

                            </li>
                            <li>
                            Pinterest
                            </li>
                        </ul>
                    </div>
                    </div>
                   
                </div>
                <div className="row">
                        <div className="footer-end">
                            © 2018 Q code Interactive, All Rights Reserved

                        </div>
                    </div>
        </div>
        </>
    );
}
export default memo(Footer);