import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import modal from './modal.module.css'
import close from '../../images/close.svg'
import plus from '../../images/plus.svg'
import jpg from '../../images/jpg.svg'
import loading from '../../images/loading.svg'
import info from '../../images/Info.svg'
import deleteIcon from '../../images/Delete.svg'
import error from '../../images/error.svg'

const modalRoot = document.querySelector('#root')

export const Modal = ({onClose, result, setResult}) => {

    const closeModal = onClose

    const [state, setState] = React.useState({loading: false, fileName: ''})

    const [valid, setValid] = React.useState({})

    const showFile = (evt) => {
        setState({loading:true,
        fileName: evt.target.files[0].name})
    }

    const validate = (evt) => {
        setValid({...valid, [`${evt.target.name}Message`]: evt.target.validationMessage, [evt.target.name]: evt.target.validity.valid, [`${evt.target.name}Value`]: evt.target.value })
    }

    const deleteFile = () => {
        setState({...state, loading: false})
    }


    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(valid.nameValue, valid.feedbackValue)
        closeModal()
        if (valid.name && valid.feedback) {
            setResult({...result, open: true, valid: true})
        }
        else {
            setResult({...result, open: true, valid: false})
        }
    }

    React.useEffect(() => {

        const closeByEsc = (evt) => {
            if (evt.key === 'Escape') {
                closeModal()
            }
        }

        document.addEventListener('keydown', closeByEsc)

        return () => {
            document.removeEventListener('keydown', closeByEsc)
        }
    }, [closeModal])
    
    return ReactDOM.createPortal (
        <div className={modal.modal} onClick={closeModal}>
            <form className={modal.form} onClick={e => e.stopPropagation()} onSubmit={handleSubmit} noValidate >
                <button className={modal.close} type='button' onClick={closeModal}>
                    <img src={close} />
                </button>
                <h2 className={modal.h2}>Отзыв</h2>
                <label htmlFor="name" className={modal.label}>Как Вас зовут?</label>
                <fieldset className={modal.fieldset}>
                    <div>
                        <input type={'text'} name='name' id='name' className={!valid.name && valid.nameValue ? `${modal.name} ${modal.valid_error}` : modal.name} placeholder='Имя Фамилия' minLength={3} maxLength={50} onChange={validate} ></input>
                        {!valid.name  && valid.nameValue && <p className={modal.validate}>
                            <img src={error} alt='error' />
                            <span>{valid.nameMessage}</span>
                        </p>}
                    </div>
                    <div className={modal.box}>
                        <div className={modal.box_hidden}></div>
                        <label htmlFor="photo" className={modal.photo_label} >
                            <img src={plus} alt='plus' className={modal.plus} />
                            <span className={modal.button_text}>Загрузить фото</span>
                            <input type='file' name='photo' id='photo' className={modal.photo} accept='image/*' onChange={showFile} ></input>
                        </label>
                    </div>
                </fieldset>
                {state.loading && <Loading fileName={state.fileName} reset={deleteFile} />}
                <label className={`${modal.label} ${modal.label_last}`} htmlFor='feedback'>
                    Все ли вам понравилось?
                    <textarea type='text' name="feedback" id="feedback" className={!valid.feedback && valid.feedbackValue ? `${modal.feedback} ${modal.valid_error}` : modal.feedback} placeholder='Напишите пару слов о вашем опыте...' onChange={validate} minLength='10' maxLength='200' ></textarea>
                    {!valid.feedback  && valid.feedbackValue && <p className={modal.validate}>
                            <img src={error} alt='error' />
                            <span>{valid.feedbackMessage}</span>
                        </p>}
                </label>
                <div className={modal.footer}>
                    <div className={`${modal.box} ${modal.box_submit}`}>
                        <div className={modal.box_hidden}></div>
                        <button className={modal.button} >
                            Отправить отзыв
                        </button>
                    </div>
                    <p className={modal.description}>
                            <img src={info} alt='info' />
                            <span>Все отзывы проходят модерацию в течение 2 часов</span>
                    </p>    
                </div>
            </form>
        </div>,
        modalRoot
    )
}

const Loading = ({fileName, reset}) => {

    const [state, setState] = React.useState(false)

    setTimeout(() => {
        setState(true)
    }, 5000)
    
    return (
    <div className={modal.loading}>
        <img src={jpg} alt='jpg' />
        <div className={modal.loading_name} >
            <span className={modal.span}>{fileName}</span>
            <div className={modal.animation}>
                <div className={modal.animation_loading}></div>
            </div>
        </div>
        {!state ? <img src={loading} /> : <img src={deleteIcon} onClick={reset} />}
    </div>
    )
}

export const Result = ({validate, onClose}) => {
    return ReactDOM.createPortal (
        <div className={validate ? modal.result : `${modal.result} ${modal.result_false}`}>
                <button className={modal.close_result} type='button' onClick={onClose}>
                    <img src={close} />
                </button>
        </div>, modalRoot
    )
}