import React from "react";

//import scss file in your componenet
import "./styles.scss";

import assetsLogo from './assets/client-logo.png';
import mainLogo from './assets/main-brainwave-hero-app.svg';

import mailIcon from './assets/icon-mail.png';
import flyIcon from './assets/icon-fly.png';
import infoIcon from './assets/icon-info.png';


import Tag from "./components/Tag";
import { FlexBetween, FlexCenter, FlexColumn, FlexFullCenter, FlexMidCenter } from "./components/Flex";
import DivButton from "./components/DivButton";
import ListTick from "./components/ListTick";
import NavMenu from "./components/NavMenu";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import { homeRegion2Data } from "./data/home";
import clsx from "clsx";
import Footer from "./components/Footer";

const WrapInfo = ({
    children,
    isReverse
}) => {
    return <FlexBetween className={clsx('container-gap mx-auto gap-16 flex-md-row', isReverse ? 'flex-column-reverse' : 'flex-column')}>
        {children}
    </FlexBetween>
}

export default function App() {
    return <BlogDetails />
    return (
        <>
            <NavMenu />

            <div className="container position-relative">
                <div className="title-logo"></div>

                <div className="container-gap">
                    <h1 className="container text-center text-title d-flex flex-column">
                        <span>Join Crypto <span className="text-hight-light">Arbitrage Algorithm</span>
                        </span>
                        <span>The Best Trading Strategy</span>
                    </h1>

                    <h5 className="text-center font-weight-medium">
                        Turbocharge your bot trading with GAMA X - the AI bot that redefines productivity in the trading realm. Unleash the power of AI for unparalleled trading success!
                    </h5>
                </div>

                <div className="main-logo container-gap">
                    <img src={mainLogo} width="100%" />
                    {/* <div className="main-shadow"></div> */}
                    <div className="position-absolute block-coint">
                        <FlexMidCenter className="d-flex gap-8 text-white font-weight-700">
                            <FlexFullCenter className="commmand commmand-sell">Sell</FlexFullCenter>
                            <div>ETH / USDT</div>
                        </FlexMidCenter>
                        <FlexBetween className="font-size-12">
                            <div>Unealized PNL (USDT)</div>
                            <div>ROE</div>
                        </FlexBetween>
                        <div className="coint-price font-weight-700">1,220.17</div>
                    </div>

                    <div className="position-absolute block-coint block-price">
                        <FlexMidCenter className="d-flex gap-8 text-white font-weight-700">
                            <FlexFullCenter className="commmand commmand-buy">Buy</FlexFullCenter>
                            <div>BTC / USDT</div>
                        </FlexMidCenter>
                        <FlexBetween className="font-size-12">
                            <div>Unealized PNL (USDT)</div>
                            <div>ROE</div>
                        </FlexBetween>
                        <div className="coint-price font-weight-700">1,050.05</div>
                    </div>
                </div>

                <div className="text-white container-gap">
                    <h2 className="text-center">
                        Our Top Partners
                    </h2>
                    <div className="d-flex d-flex flex-row justify-content-center flex-wrap">
                        <img src={assetsLogo} width={270} height={136} />
                        <img src={assetsLogo} width={270} height={136} />
                        <img src={assetsLogo} width={270} height={136} />
                        <img src={assetsLogo} width={270} height={136} />
                    </div>
                </div>

                <hr />

                {/* The Best Arbitrage Platform That Offers Optimal Profit */}
                <WrapInfo>
                    <FlexColumn className="col-md-6 col-xs-12 gap-16">
                        <Tag
                            tag="ABOUT GAMAX ALGORITHM"
                            word1="The Best"
                            word2="Arbitrage Platform"
                            word3="That Offers Optimal Profit"
                        />
                        <p className="sub-details font-size-16 font-weight-400">Bunnybot is a high-frequency arbitrage trading algorithm on Cryptocurrency. We offer users a fully operational long-term investment platform. It plans to leverage blockchain technology to ensure a seamless investment experience and wants to help investors unfreeze tied-up investment deposits. You can withdraw and deposit through your wallet easily.
                        </p>

                        <DivButton>GET STARTED</DivButton>
                    </FlexColumn>
                    <div className="d-flex col-md-6 col-xs-12">
                        <div className="region-box-logo"></div>
                    </div>
                </WrapInfo>

                {/* Why Choose Arbitrage  */}
                <div className="mb-5 container-gap">
                    <Tag
                        className="text-center"
                        word1={<>Why Choose Arbitrage <br />Platform</>}
                        word2="GamaX"
                    />

                    <div className="d-flex flex-wrap container-gap">
                        {homeRegion2Data.map((item, index) => {
                            return (
                                <div key={index} className="d-flex flex-column col-sm-6 col-md-4 col-xs-12">
                                    <div className="box py-2 px-3">
                                        <img alt="" src={item.icon} width={150} height={150} />
                                        <div>
                                            <h4 className="text-white font-size-20 font-size-sm-15">{item.title}</h4>
                                            <div>{item.desription}</div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Read GamaX Documents */}
                <WrapInfo isReverse>
                    <div className="col-md-6 col-xs-12 tag-paper-logo"></div>

                    <FlexColumn className="col-md-6 col-xs-12 gap-16">
                        <Tag
                            tag="TECHNICAL PAPER"
                            word1="Read"
                            word2="GamaX"
                            word3={<><br />Documents</>}
                        />

                        <ListTick
                            listData={[
                                { text: 'Technical Paper' },
                                { text: 'Privacy & Policy' },
                                { text: 'Risk Warning' },
                            ]}
                        />

                        <DivButton>VIEW DOCUMENT</DivButton>
                    </FlexColumn>
                </WrapInfo>

                {/* Network Structure */}
                <WrapInfo>
                    <FlexColumn className="col-md-6 col-xs-12 gap-16">
                        <Tag
                            tag="DEVELOPER REVENUE STRUCTURE"
                            word1="Network Structure"
                        />

                        <ListTick
                            listData={[
                                { percent: '30%', text: 'Investment' },
                                { percent: '20%', text: 'Network Revenue' },
                                { percent: '5%', text: 'Network Member' },
                                { percent: '9%', text: 'Investor Commission' },
                            ]}
                        />

                        <DivButton>VIEW DETAIL</DivButton>
                    </FlexColumn>
                    <div className="col-md-6 col-xs-12 tag-developer-logo"></div>
                </WrapInfo>

                {/* Network */}
                <WrapInfo isReverse>
                    <div className="col-md-6 col-xs-12 tag-network-logo"></div>
                    <FlexColumn className="col-md-6 col-xs-12 gap-16">
                        <Tag
                            tag="Network"
                            word1="Join & Earn"
                            word2={<><br />Developer Network</>}
                        />

                        <ListTick
                            listData={[
                                { text: 'Build On Blockchain Technology' },
                                { text: 'Pair & Security' },
                                { text: `Share From The Platform's Profits` },
                                { text: `Strong Supportive Community` },
                                { text: `All The World` },
                            ]}
                        />

                        <DivButton>LAUNCH APP</DivButton>
                    </FlexColumn>
                </WrapInfo>

                {/* Join & Earn Developer Network */}
                <WrapInfo className="container-gap mx-auto gap-16 flex-md-row">
                    <FlexColumn className="col-md-6 col-xs-12 gap-16">
                        <Tag
                            tag="TOKEN OWNERSHIP"
                            word1="Share Platform"
                            word2="Revenue"
                            word3={<>Token<br />Ownership</>}
                        />

                        <ListTick
                            listData={[
                                { text: 'Release 1.000.000 BFi Tokens' },
                                { text: 'Profit is distributed quaterly' },
                                { text: `Profit is distributed quaterly` },
                                { text: `Token Price Increase` },
                                { text: `Easy Exchange` },
                                { text: `Own Sustainable Profit` },
                            ]}
                        />

                        <DivButton>LAUNCH APP</DivButton>
                    </FlexColumn>
                    <div className="col-md-6 col-xs-12 tag-token-logo"></div>
                </WrapInfo>

                {/* Trade & Earn BFi Exchange */}
                <FlexBetween className="container-gap gap-24 flex-column mx-auto">
                    <Tag
                        tag="TOKEN EXCHANGE"
                        word1="Trade & Earn"
                        word2="BFi Exchange"
                    />

                    <div className="d-flex flex-row flex-md-row flex-column">
                        <FlexColumn className="col-md-6 col-xs-12 gap-16">
                            <div className="tag-trade tag-trade-left"></div>

                            <ListTick
                                listData={[
                                    { text: 'Trading 24/7 realtime' },
                                    { text: 'Liquidity pool' },
                                    { text: `Tokens Sale On Exchange` },
                                    { text: `Easy Buy/Sell` },
                                    { text: `Quaterly distributed` },
                                ]}
                            />
                        </FlexColumn>
                        <FlexColumn className="col-md-6 col-xs-12 gap-16">
                            <div className="tag-trade tag-trade-right"></div>

                            <ListTick
                                listData={[
                                    { text: 'Strong Community' },
                                    { text: 'Flexibility Connect Wallet' },
                                    { text: `Share 20% Total Profit for Tokens` },
                                    { text: `Tokens Limited` },
                                    { text: `Share Tokens for others easily` },
                                ]}
                            />
                        </FlexColumn>
                    </div>

                    <DivButton>EXCHANGE</DivButton>
                </FlexBetween>

                {/* Message To GamaX */}
                <FlexCenter className="container-gap gap-24 flex-column mx-auto">
                    <div className="d-flex justify-content-md-center justify-content-start">
                        <Tag
                            tagClassName="justify-content-md-center justify-content-start"
                            tag="CONTACT US"
                            word1="Message To"
                            word2="GamaX"
                        />
                    </div>

                    <div className="d-flex flex-row text-white gap-16 flex-md-row flex-column">
                        <FlexFullCenter className="tag-contact">
                            <FlexColumn className="align-items-center gap-16">
                                <div className="social-icons"></div>
                                <div className="font-size-24">Drop Us a Line</div>
                                <div className="font-size-18">support@bunnybot.io</div>
                            </FlexColumn>
                        </FlexFullCenter>

                        <FlexFullCenter className="tag-contact">
                            <FlexColumn className="align-items-center gap-16">
                                <div className="social2-icons"></div>
                                <div className="font-size-24">Bunnybot Channel</div>
                                <div className="font-size-18">Let's join the our community</div>
                            </FlexColumn>
                        </FlexFullCenter>
                    </div>
                </FlexCenter>

                <Footer />
            </div>
        </>
    );
}
