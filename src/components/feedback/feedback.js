import React from "react";
import feedback from './feedback.module.css'
import plus from '../../images/plus.svg'
import buba from '../../images/buba.png'
import avatar from '../../images/avatar.png'
import left from '../../images/Left.svg'
import right from '../../images/Right.svg'
import { Modal, Result } from '../modal/modal'

const feedbackList = [
    {
        img: buba,
        name: 'Буба Бубенцов',
        data: '08.01.2022',
        text: 'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.'
    },

    {
        img: avatar,
        name: 'Илья Анташкевич',
        data: '08.01.2022',
        text: 'Год назад попытал счастье, откликнулся на вакансию, прошел собес и попал в компанию. Долго переживал что будет тяжело влиться, но тут прям классные ребята работают, все на одной волне. Всегда готовы помочь с любым вопросом. Для эффективной работы здесь нужно хорошо знать иностранные языки.'
    },

    {
        img: avatar,
        name: 'Борис Гульцов',
        data: '08.01.2022',
        text: 'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.'
    },

    {
        img: avatar,
        name: 'Андрей Бабальный',
        data: '08.01.2022',
        text: 'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.'
    }

]


export const Feedback = () => {

    const [state, setState] = React.useState(false)

    const [offset, setOffset] = React.useState(0)

    const ref = React.useRef(null)

    const openModal = () => {
        setState(true)
    }

    const closeModal = () => {
        setState(false)
    }

    const nextElement = () => {
        setOffset((current) => {
            const newWidth = current - ref.current.offsetWidth / 2
            const maxWidth = - ref.current.offsetWidth / 2 * (feedbackList.length - 1)
            console.log(newWidth);
            return Math.max(newWidth, maxWidth)
        })
    }

    const prevElement = () => {
        setOffset((current) => {
            const newWidth = current + ref.current.offsetWidth / 2
            console.log(newWidth);
            return Math.min(newWidth, 0)
        })
    }

    const [result, setResult] = React.useState({open: false})

    const closeResult = () => {
        setResult({...result, open: false})
    }

    return (
        <section className={feedback.section}>
            <div className={feedback.container}>
                <div className={feedback.item}>
                    <h2 className={feedback.h2}>Отзывы</h2>
                    <div className={feedback.box}>
                        <div className={feedback.box_hidden}></div>
                        <button className={feedback.button} onClick={openModal}>
                            <img src={plus} alt='plus' className={feedback.plus} />
                            <span className={feedback.button_text}>Добавить отзыв</span>
                        </button>
                    </div>
                </div>
                <div className={feedback.window}>
                    <div className={feedback.item} style={{transform: `translateX(${offset}px)`}} ref={ref}>
                        {feedbackList.map((item, id) => (
                            <Item item={item} key={id} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={feedback.buttons}>
                <button type="button" className={feedback.button_swiper} onClick={prevElement}>
                    <img src={left} alt='left' />
                </button>
                <button type="button" className={`${feedback.button_swiper} ${feedback.button_active}`} onClick={nextElement}>
                    <img src={right} alt='right' />
                </button>
            </div>
            {state && <Modal onClose={closeModal} result={result} setResult={setResult} />}
            {result.open && <Result validate={result.valid} onClose={closeResult} />}
        </section>
    )
}

const Item = ({item}) => {
    return (
        <article className={feedback.article}>
            <div className={feedback.title}>
                <img src={item.img} alt='avatar' className={feedback.avatar} />
                <h3 className={feedback.name}>{item.name}</h3>
                <span className={feedback.date}>{item.data}</span>
            </div>
            <p className={feedback.text}>{item.text}</p>
         </article>
    )
}