import React, { useState, useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import './Contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const { register, formState, handleSubmit } = useForm()

  const name = {
    required: { value: true, message: 'Name is required' },
    minLength: { value: 3, message: 'The name is too short' },
    maxLength: { value: 15, message: 'The name is too long' },
  }

  const phone = {
    required: { value: true, message: 'Phone is required' },
    pattern: {
      value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
      message: 'Phone must be valid',
    },
    minLength: { value: 10, message: 'The phone is too short' },
    maxLength: { value: 13, message: 'The phone is too long' },
  }

  const email = {
    required: { value: true, message: 'Email is required' },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'Email must be valid',
    },
  }

  const message = {
    required: { value: true, message: 'Message is required' },
    maxLength: { value: 500, message: 'The message is too long' },
  }

  const onSubmit = () => {
    const email = sendEmail()
  }

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_5cfvgkm',
        'template_m9tznfa',
        form.current,
        'ahDOZGRjxvVn3bv3p'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="contact container-animate">
        <div className="contact__container">
          <div className="contact__content">
            <h1 className="contact__title title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'O', 'N', 'T', 'A', 'C', 'T', ' ', 'M', 'E']}
                index={15}
              />
            </h1>
            <h2 className="contact__subtitle">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'G',
                  'e',
                  't',
                  ' ',
                  'i',
                  'n',
                  ' ',
                  't',
                  'o',
                  'u',
                  'c',
                  'h',
                ]}
                index={25}
              />
            </h2>
            <p className="contact__descr description">
              I am available for frelance or full-time position. Contact me and
              let's talk.
            </p>

            <div className="contact__form form">
              <form
                ref={form}
                id="contact-form"
                className="form__container"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="form__top">
                  <div className="form__item">
                    <label htmlFor="name" className="form__label">
                      Name
                    </label>
                    <input
                      className="form__input"
                      name="name"
                      id="name"
                      {...register('name', name)}
                      type="text"
                      placeholder="John"
                    />
                    <span className="form__error">
                      {formState.errors.name?.message}
                    </span>
                  </div>
                  <div className="form__item">
                    <label htmlFor="phone" className="form__label">
                      Phone number
                    </label>
                    <input
                      name="phone"
                      id="phone"
                      {...register('phone', phone)}
                      className="form__input"
                      type="number"
                      placeholder="099-000-00-00"
                    />
                    <span className="form__error">
                      {formState.errors.phone?.message}
                    </span>
                  </div>
                </div>
                <div className="form__part">
                  <label htmlFor="email" className="form__label">
                    Email
                  </label>
                  <input
                    name="email"
                    id="email"
                    {...register('email', email)}
                    className="form__input"
                    type="email"
                    placeholder="example@email.com"
                  />
                  <span className="form__error">
                    {formState.errors.email?.message}
                  </span>
                </div>
                <div className="form__part">
                  <label htmlFor="message" className="form__label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    {...register('message', message)}
                    className="form__textarea"
                    rows="10"
                    type="text"
                  ></textarea>

                  <span className="form__error">
                    {formState.errors.message?.message}
                  </span>
                </div>
                <button className="form__button" type="submit">
                  Send Message
                </button>
              </form>
            </div>
           
          </div>
          <div className="contact__map map">
          <div className="contact__info info">
              <div className="info__name">Natalya Bortsova</div>
              <div className="info__сountry">Ukraine</div>
              <div className="info__сity">Kiev</div>
              <div className="info__email">natanatka31@gmail.com</div>
            </div>
            <MapContainer center={[50.450001, 30.523333]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[50.450001, 30.523333]}>
                <Popup>
                  Natalye lives here, come over for a cup of coffee ☕
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <Loader type="ball-scale-ripple" />
    </>
  )
}

export default Contact
