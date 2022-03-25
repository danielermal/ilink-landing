import React from "react";
import title from './title.module.css'
import me from '../../images/profile.jpg'
import male from '../../images/Male.svg'
import animal from '../../images/animal.svg'

export const Title = () => {

    return (
        <section className={title.section}>
            <h1 className={title.title}>Добро пожаловать в академию!</h1>
            <div className={title.container}>
                <img src={me} alt='me' className={title.photo} />
                <div className={title.information}>
                    <p className={title.name_container}>
                        <span className={title.name}>Даниил Ермалюк</span>
                        <span className={title.date}>05.07.1996</span>
                    </p>
                    <ul className={title.list}>
                        <li>Город: <span className={title.value}>Томск</span></li>
                        <li>Пол: <span className={title.value}>мужчина <img src={male} alt='male' /></span></li>
                        <li>Возраст: <span className={title.value}>25</span></li>
                        <li>О себе: <span className={title.value}>Всем привет! Меня зовут Даниил, мне 25 лет. В прошлом году закончил магистратуру по специальности Нефтегазовое дело, и поработав по специальности, понял, что это не моё. Начал интересоваться Frontend разработкой и влюбился. Прохожу курсы на Яндекс.практикум</span></li>
                        <li className={title.item}><img src={animal} alt='animal' className={title.animal} />Домашнее животное:	&#160;<span className={title.value}>нет :(</span></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}