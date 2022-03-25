import React from "react";
import footer from './footer.module.css'
import insta from '../../images/Insta.svg'
import fb from '../../images/FB.svg'
import twitter from '../../images/Twitter.svg'
import frame from '../../images/Frame.svg'
import tg from '../../images/Telegram.svg'

export const Footer = () => {

    return (
        <footer className={footer.footer}>
            <div className={footer.content}>
                <p className={footer.text}>iLINK ACADEMY. ALL RIGHTS RESERVED. 2022</p>
                <ul className={footer.icons}>
                    <li>
                        <a href="#" target='_blank' >
                            <img src={insta} alt='insta' />
                        </a>
                    </li>
                    <li>
                        <a href="#" target='_blank' >
                            <img src={fb} alt='fb' />
                        </a>
                    </li>
                    <li>
                        <a href="#" target='_blank' >
                            <img src={twitter} alt='twitter' />
                        </a>
                    </li>
                    <li>
                        <a href="#" target='_blank' >
                            <img src={frame} alt='frame' />
                        </a>
                    </li>
                    <li>
                        <a href="#" target='_blank' >
                            <img src={tg} alt='tg' />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}