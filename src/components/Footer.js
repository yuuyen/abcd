import React from 'react';

import { FlexColumn } from './Flex';
import mailIcon from '../assets/icon-mail.png';
import flyIcon from '../assets/icon-fly.png';
import infoIcon from '../assets/icon-info.png';

const Footer = () => {
    return (
        <>
            <hr className="container-gap" />

            {/* Footer */}
            <FlexColumn className="footer container-gap">
                <div className="d-flex align-items-md-center align-items-start col-12 mb-4 gap-sm-32 gap-1 flex-md-row flex-column">
                    <FlexColumn className="ml-2 col-md-6 col-xs-12 text-white">
                        <FlexColumn className="gap-sm-12 gap-24">
                            <div className="header-logo"></div>
                            <div>A new way to make the investment easy, reliable and secure.</div>
                            <div className="d-flex flex-row gap-16">
                                <img src={mailIcon} width={44} height={44} />
                                <img src={flyIcon} width={44} height={44} />
                                <img src={infoIcon} width={44} height={44} />
                            </div>
                        </FlexColumn>
                    </FlexColumn>

                    <div className="d-flex flex-row col-md-6 col-xs-12 gap-24">
                        <FlexColumn className="gap-16">
                            <h2 className="font-size-18 font-size-sm-14 text-white upper-case">
                                Useful Links
                            </h2>

                            <FlexColumn className="gap-12 font-size-16 font-size-sm-12">
                                <a>
                                    How it Works
                                </a>

                                <a>
                                    Join to invest
                                </a>

                                <a>
                                    Tokens Exchange
                                </a>
                            </FlexColumn>
                        </FlexColumn>

                        <FlexColumn className="gap-16">
                            <h2 className="font-size-18 font-size-sm-14 text-white upper-case">
                                Community
                            </h2>

                            <FlexColumn className="gap-12 font-size-16 font-size-sm-12">
                                <a>
                                    Help Center
                                </a>

                                <a>
                                    Partners
                                </a>

                                <a>
                                    Blog
                                </a>
                            </FlexColumn>
                        </FlexColumn>
                    </div>
                </div>

                <div className="copy-right font-size-16 font-size-sm-14 text-center pt-4 mb-4 text-white">
                    © BUNNYBOT 2024, All Rights Reserved
                </div>
            </FlexColumn>
        </>
    )
}

export default Footer
