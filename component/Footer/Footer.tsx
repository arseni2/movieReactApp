import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/style.css'
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




let Footer = React.memo(() => {
    return (
        <footer className="col-12 d-flex mw-100 position-sticky" style={{marginLeft: 0+'px', marginTop: 29+'%', height: 300+'px', marginRight: 0+'px',
            background: "#A99BFF"}}>
            <div className="container-fluid">
                <div className="row">
                    <div className="form col-12">
                        <form>
                            <div className="form-row  ">
                                <div className="col-sm col-md col-lg d-flex form__item">
                                    <input type="text" className="form-control" placeholder="First name"/>
                                </div>
                                <div className="w-100"> </div>
                                <div className="col-sm col-md col-lg d-flex form__item">
                                    <input style={{width: 100+"%"}} type="text" className="form-control" placeholder="Last name"/>
                                </div>
                                <div className="w-100"> </div>
                                <div className="col-sm col-md col-lg d-flex form__item">
                                    <input type="text" className="form-control" placeholder="Email" required={true}/>
                                </div>
                                <div className="w-100"> </div>
                                <div className="col-lg-12">
                                    <button type="submit" className="btn btn-primary col-lg form__item">send mail
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="icons col-lg">
                    <a href="#"><FontAwesomeIcon icon={faVk} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagramSquare} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
            <br/>
                <br/>
        </footer>
    );
})

export default Footer;
