import React from "react";

//import scss file in your componenet
import "../styles.scss";

import chevIcon from '../assets/chevron-up-icon.png';

import bnbIcon from '../assets/blog-bnb-icon.png';
import blogStep1 from '../assets/blog-step-1.png';
import blogStep2 from '../assets/blog-step-2.png';
import blogStep3 from '../assets/blog-step-3.png';

import { FlexCenter, FlexColumn } from "../components/Flex";

import NavMenu from "../components/NavMenu";
import Footer from "../components/Footer";

export default function BlogDetails() {
    return (
        <>
            <NavMenu />

            <div className="container position-relative">
                <div className="container-gap">
                    <div className="d-flex flex-row gap-16 font-size-20 font-size-sm-14">
                        <div>Blog</div>
                        <div><img src={chevIcon} width={16} height={16} /></div>
                        <div>Learn more about GAMAX ALGORITH</div>
                    </div>
                </div>

                <FlexCenter className="main-logo">
                    <div className="text-white">
                        <FlexColumn className="gap-16 text-md-left text-center">
                            <img alt="" src={bnbIcon} width="100%" height="100%" />
                            <h4>Instructions On How To Top Up BNB To Make Gas Fees Before Connecting The Wallet</h4>
                        </FlexColumn>

                        <FlexColumn className="gap-16">
                            <FlexColumn className="pt-5 font-size-16">
                                <p>
                                    Step 1: Login to Metamask wallet. Click on the 3 dashes in the upper left corner of the screen and then select Settings
                                </p>
                                <p>
                                    Step 2: Select Network and select Add Network
                                </p>
                            </FlexColumn>

                            <img alt="" src={blogStep1} width="100%" height="100%" />
                        </FlexColumn>

                        <FlexColumn className="gap-16">
                            <FlexColumn className="pt-5 font-size-16">
                                <p>
                                    Step 3: Select BNB Smart Chain network in POPULAR tab or Fill in network information in CUSTOM NETWORKS tab if BNB Smart Chain is not available in POPULAR
                                    <br />
                                    Section BNB network information:
                                    <br />
                                    Network Name: BSC
                                    <br />
                                    RPC URL: http://bsc-dataseed.binance.org
                                    <br />
                                    Chain ID: 56
                                    <br />
                                    Block Explorer URL: http://bscscan.com
                                </p>
                                <p>
                                    Step 4: Select Approve and Switch to network or Add to complete adding BSC network on Metamask wallet
                                </p>
                            </FlexColumn>

                            <img alt="" src={blogStep2} width="100%" height="100%" />
                        </FlexColumn>

                        <FlexColumn className="gap-16">
                            <FlexColumn className="pt-5 font-size-16">
                                <p>
                                    Bước 5: Chọn Import Tokens, sau đó hoặc điền Tokens muộn thêm vào trên thanh SEARCH hoặc dán địa chỉ Contract của Token bạn muốn thêm rồi chọn IMPORT để thêm nó trên mạng BSC.
                                </p>
                            </FlexColumn>

                            <img alt="" src={blogStep3} width="100%" height="100%" />
                        </FlexColumn>
                    </div>
                </FlexCenter>

                <Footer />
            </div>
        </>
    );
}
