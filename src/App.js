import React from "react";

//import scss file in your componenet
import "./styles.scss";

import assetsLogo from './assets/client-logo.png';
import securityIcon from './assets/security-icon.png';
import protectIcon from './assets/protect-icon.png';
import lifetimeIcon from './assets/lifetime-icon.png';
import safetyIcon from './assets/safety-icon.png';
import investIcon from './assets/invest-icon.png';
import mainLogo from './assets/main-brainwave-hero-app.svg';

import mailIcon from './assets/icon-mail.png';
import flyIcon from './assets/icon-fly.png';
import infoIcon from './assets/icon-info.png';


import Tag from "./components/Tag";
import { FlexBetween, FlexCenter, FlexColumn, FlexFullCenter } from "./components/Flex";
import DivButton from "./components/DivButton";
import ListTick from "./components/ListTick";
import NavMenu from "./components/NavMenu";

export default function App() {
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
                <FlexBetween className="container-gap mx-auto gap-16 flex-md-row flex-column">
                    <div className="d-flex flex-column col-sm-6 gap-16">
                        <Tag
                            tag="ABOUT GAMAX ALGORITHM"
                            word1="The Best"
                            word2="Arbitrage Platform"
                            word3="That Offers Optimal Profit"
                        />
                        <p className="sub-details font-size-16 font-weight-400">Bunnybot is a high-frequency arbitrage trading algorithm on Cryptocurrency. We offer users a fully operational long-term investment platform. It plans to leverage blockchain technology to ensure a seamless investment experience and wants to help investors unfreeze tied-up investment deposits. You can withdraw and deposit through your wallet easily.
                        </p>

                        <DivButton>GET STARTED</DivButton>
                    </div>
                    <FlexFullCenter className="col-sm-6">
                        <div className="region-box-logo"></div>
                    </FlexFullCenter>
                </FlexBetween>

                {/* Why Choose Arbitrage  */}
                <div className="mb-5 container-gap">
                    <Tag
                        className="text-center"
                        word1={<>Why Choose Arbitrage <br />Platform</>}
                        word2="GamaX"
                    />

                    <div className="d-flex flex-wrap container-gap">
                        <div className="d-flex flex-column col-sm-4">
                            <div className="box py-2 px-4">
                                <img src={securityIcon} width={150} height={150} />
                                <h4 className="text-white">BlockchainSecurity</h4>
                                <div>Best security technology Trade anywhere on the world</div>
                            </div>
                        </div>
                        <div className="d-flex flex-column col-sm-4">
                            <div className="box py-2 px-4">
                                <img src={protectIcon} width={150} height={150} />
                                <div>
                                <h4 className="text-white">Protect the identity</h4>
                                <div>Your identity is protected You are responsible for your profits</div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column col-sm-4">
                            <div className="box py-2 px-4">
                                <img src={lifetimeIcon} width={150} height={150} />
                                <h4 className="text-white">Lifetimetransaction</h4>
                                <div>Transactions exist forever on the internet space</div>
                            </div>
                        </div>
                        <div className="d-flex flex-column col-sm-4">
                            <div className="box py-2 px-4">
                                <img src={safetyIcon} width={150} height={150} />
                                <h4 className="text-white">Safety profit</h4>
                                <div>Arbitrage trading is safe profit Balance and profit are secure</div>
                            </div>
                        </div>
                        <div className="d-flex flex-column col-sm-4">
                            <div className="box py-2 px-4">
                                <img src={investIcon} width={150} height={150} />
                                <h4 className="text-white">Invest & Withdraw easily</h4>
                                <div>Invest or Withdraw your balance easily through your wallet</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Read GamaX Documents */}
                <FlexBetween className="container-gap mx-auto gap-16 flex-md-row flex-column">
                    <div className="col-sm-6 tag-paper-logo"></div>

                    <div className="d-flex flex-column col-sm-6 gap-16">
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
                    </div>
                </FlexBetween>

                {/* Network Structure */}
                <FlexBetween className="container-gap mx-auto gap-16 flex-md-row flex-column-reverse">
                    <div className="d-flex flex-column col-sm-6 gap-16">
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
                    </div>
                    <div className="col-sm-6 tag-developer-logo"></div>
                </FlexBetween>

                {/* Join & Earn Developer Network */}
                <FlexBetween className="container-gap mx-auto gap-16 flex-md-row flex-column">
                    <div className="col-sm-6 tag-network-logo"></div>
                    <div className="d-flex flex-column col-sm-6 gap-16">
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
                    </div>
                </FlexBetween>

                {/* Join & Earn Developer Network */}
                <FlexBetween className="container-gap mx-auto gap-16 flex-md-row flex-column-reverse">
                    <div className="d-flex flex-column col-sm-6 gap-16">
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
                    </div>
                    <div className="col-sm-6 tag-token-logo"></div>
                </FlexBetween>

                {/* Trade & Earn BFi Exchange */}
                <FlexBetween className="container-gap gap-24 flex-column mx-auto">
                    <Tag
                        tag="TOKEN EXCHANGE"
                        word1="Trade & Earn"
                        word2="BFi Exchange"
                    />

                    <div className="d-flex flex-row flex-md-row flex-column">
                        <div className="d-flex flex-column col-sm-6 gap-16">
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
                        </div>
                        <div className="d-flex flex-column col-sm-6 gap-16">
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
                        </div>
                    </div>

                    <DivButton>EXCHANGE</DivButton>
                </FlexBetween>

                {/* Message To GamaX */}
                <FlexCenter className="container-gap gap-24 flex-column mx-auto">
                    <FlexCenter>
                        <Tag
                            tagClassName="justify-content-center"
                            tag="CONTACT US"
                            word1="Message To"
                            word2="GamaX"
                        />
                    </FlexCenter>

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

                <hr className="container-gap" />

                {/* Footer */}
                <div className="footer container-gap d-flex flex-column">
                    <div className="d-flex align-items-md-center align-items-start col-12 mb-4 flex-md-row flex-column">
                        <FlexFullCenter className="d-flex flex-column ml-2 col-6 text-white">
                            <div className="d-flex flex-column gap-sm-12 gap-24">
                                <div className="header-logo"></div>
                                <div>A new way to make the investment easy, reliable and secure.</div>
                                <div className="d-flex flex-row gap-16">
                                    <img src={mailIcon} width={44} height={44} />
                                    <img src={flyIcon} width={44} height={44} />
                                    <img src={infoIcon} width={44} height={44} />
                                </div>
                            </div>
                        </FlexFullCenter>

                        <div className="d-flex flex-row justify-content-around col-sm-6 gap-24">
                            <div className=" d-flex flex-column gap-16">
                                <h2 className="font-size-18 text-white upper-case">
                                    Useful Links
                                </h2>

                                <div className="d-flex flex-column gap-12 font-size-16">
                                    <a>
                                        How it Works
                                    </a>

                                    <a>
                                        Join to invest
                                    </a>

                                    <a>
                                        Tokens Exchange
                                    </a>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-16">
                                <h2 className="font-size-18 text-white upper-case">
                                    Community
                                </h2>

                                <div className="d-flex flex-column gap-12 font-size-16">
                                    <a>
                                        Help Center
                                    </a>

                                    <a>
                                        Partners
                                    </a>

                                    <a>
                                        Blog
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copy-right text-center pt-4 font-size-16 text-white">
                        © BUNNYBOT 2024, All Rights Reserved
                    </div>
                </div>

                <div className="container-gap"></div>
            </div>
        </>
    );
}
