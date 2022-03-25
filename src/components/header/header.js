import React from "react";
import header from './header.module.css'
import myPhoto from '../../images/profile.jpg'
import logo from '../../images/logo.svg'
import logoScroll from '../../images/logo_scroll.svg'
import profileButton from '../../images/Profile_button.svg'
import profileButtonScroll from '../../images/Profile_button_scroll.svg'

export const Header = () => {

    const [scroll, setScroll] = React.useState(false)
    const [mobileWidth, setMobileWidth] = React.useState(false)
    const width = document.documentElement.clientWidth

    React.useEffect (() => {

        if (width <= 768) {
            setMobileWidth(true)
        }

        window.onscroll = () => {
            if (window.pageYOffset) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
        }

        window.onresize = () => {
            if (document.documentElement.clientWidth <= 768) {
                setMobileWidth(true)
            }
            else {
                setMobileWidth(false)
            }
        }

    }, [])

    return (
        <>
            <header className={header.header} >
                {mobileWidth ?
                    <Content name={'Даниил'} />
                    :
                    <Content name={'Даниил Ермалюк'} />
                }
            </header>
            {scroll && 
            <header className={`${header.header} ${header.header_scroll}`} >
                {mobileWidth ?
                    <ContentOnScroll name={'Даниил'} />
                    :
                    <ContentOnScroll name={'Даниил Ермалюк'} />
                }
            </header>}
        </>
    )
}

const Content = ({name}) => {
    return (
        <nav className={header.nav}>
            <figure className={header.profile}>
                <img src={myPhoto} alt='фото профиля' className={header.avatar} />
                <span className={header.name}>{name}</span>
            </figure>
            <img src={logo} alt='logo' className={header.logo} />
            <div className={header.container}>
                <div className={header.hidden_container}></div>
                <button className={header.button} >
                    <span className={header.button_text}>Панель управления</span>
                    <img src={profileButton} alt='profile' className={header.button_image} />
                </button>
            </div>
         </nav>
    )
}

const ContentOnScroll = ({name}) => {
    return (
        <nav className={header.nav}>
            <figure className={header.profile}>
                <img src={myPhoto} alt='фото профиля' className={header.avatar} />
                <span className={`${header.name} ${header.name_scroll} `}>{name}</span>
            </figure>
            <img src={logoScroll} alt='logo' className={header.logo} />
            <div className={`${header.container} ${header.container_scroll}`}>
                <div className={`${header.hidden_container} ${header.hidden_container_scroll}`}></div>
                <button className={header.button_scroll} >
                    <span className={header.button_text}>Панель управления</span>
                    <img src={profileButtonScroll} alt='profile' className={header.button_image} />
                </button>
            </div>
         </nav>
    )
}