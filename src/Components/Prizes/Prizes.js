import React from 'react'
import "./Prizes.css";
import img from '../../resources/images/prize.png';

export default function Prizes() {
    return (
        <div style={{ backgroundColor:'#071330' }}>
        
        
            <div className="container container--xs">
                
                <div className="row align-items-center">
                <div className="col-sm-4">
                        <div className="item">
                            <div className="item_head">
                                <div className="item_image" style={{ backgroundImage:`url(${img})` }}></div>
                                <div className="text">
                                    <h3 className="text-uppercase">100,000</h3>
                                    <p style={{ fontStyle:'normal' }}>LKR</p>
                                    <h2>2<sup>nd</sup> place</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="item">
                            <div className="item_head">
                                <div className="item_image" style={{ backgroundImage:`url(${img})` }}></div>
                                <div className="text">
                                    <h3 className="text-uppercase">200,000</h3>
                                    <p style={{ fontStyle:'normal' }}>LKR</p>
                                    <h2>1<sup>st</sup> place</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="item">
                            <div className="item_head">
                                <div className="item_image" style={{ backgroundImage:`url(${img})` }}></div>
                                <div className="text">
                                    <h3 className="text-uppercase">50,000</h3>
                                    <p style={{ fontStyle:'normal' }}>LKR</p>
                                    <h2>3<sup>rd</sup> place</h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        
        </div>
    )
}
