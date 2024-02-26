import React from "react";

//import scss file in your componenet
import "../styles.scss";

import searchIcon from '../assets/search-icon.png';

import chevIcon from '../assets/chevron-up-icon.png';

import bnbIcon from '../assets/blog-bnb-icon.png';
import binanceIcon from '../assets/blog-binance-icon.png';
import metamaskIcon from '../assets/blog-metamask-icon.png';


import { FlexBetween, FlexCenter, FlexColumn } from "../components/Flex";

import NavMenu from "../components/NavMenu";
import Tag from "../components/Tag";
import Footer from "../components/Footer";

const menuLeftData = [
    'TECHNISCHES PAPIER (7)',
    'LEARN ABOUT GAMAX ALGORITHM (3)',
    'OPEN WALLET & REGISTER (6)',
    'INVESTMENT GUIDELINES (7)',
    'CONNECT GAMAX ALGORITHM (8)',
    'WITHDRAW TO WALLET (2)',
    'CRYPTO KNOWLEDGE (4)',
    'BFi TOKEN (3)',
    'NOTIFICATIONS (3)',
    'FAQS (4)'
]

export default function Blog() {
    return (
        <>
            <NavMenu />

            <div className="container position-relative">

                <div className="container-gap">
                    <h1 className="container text-center text-title d-flex flex-column">
                        Blog
                    </h1>

                    <h5 className="text-center font-weight-medium">
                        Get started with GAMAX ALGORITH - Revolutionize Your Trading Experience with Our Trader Bot
                    </h5>
                </div>

                <FlexCenter className="main-logo container-gap">
                    <div className="search-container position-relative">
                        <div className="search-icon"><img src={searchIcon} width={24} height={24} /></div>
                        <input className="search-box font-size-16 font-weight-400" type="text" placeholder="Search topic" />
                    </div>
                </FlexCenter>

                <FlexBetween className="main-logo container-gap">
                    <FlexColumn className="blog-menu col-4">
                        {menuLeftData.map((item, index) => {
                            return <div key={index}
                                className="nav-memu-lelf d-flex flex-row font-size-14 font-weight-600"
                            >
                                <div><img src={chevIcon} width={16} height={16} /></div>
                                <div>{item}</div>
                            </div>
                        })}
                    </FlexColumn>
                    <div className="col-md-8 col-12 text-white text-md-left text-center">
                        <h2 className="blog-title pb-5 text-md-left text-center">
                            Learn about GAMAX ALGORITH
                        </h2>

                        <FlexColumn className="gap-16">
                            <FlexBetween className="pt-5 md-flex-row flex-row-reverse">
                                <h4>Instructions On How To Top Up BNB To Make Gas Fees Before Connecting The Wallet</h4>
                                <Tag tag="01"></Tag>
                            </FlexBetween>

                            <img alt="" src={bnbIcon} width="100%" height="100%" />
                        </FlexColumn>

                        <FlexColumn className="gap-16">
                            <FlexBetween className="pt-5 md-flex-row flex-row-reverse">
                                <h4>Instructions To Register And Make Transactions On Binance</h4>
                                <Tag tag="02"></Tag>
                            </FlexBetween>

                            <img alt="" src={binanceIcon} width="100%" height="100%" />
                        </FlexColumn>

                        <FlexColumn className="gap-16">
                            <FlexBetween className="pt-5 md-flex-row flex-row-reverse">
                                <h4>Instructions To Open Metamask Wallet.</h4>
                                <Tag tag="03"></Tag>
                            </FlexBetween>

                            <img alt="" src={metamaskIcon} width="100%" height="100%" />
                        </FlexColumn>
                    </div>
                </FlexBetween>

                <Footer />
            </div>
        </>
    );
}
