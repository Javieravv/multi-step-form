import { ChangeEvent, useState } from "react"
import { FooterBottons } from "./FooterBottons"

export const PersonalInfo = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [dataError, setDataError] = useState({
        name:  true,
        email: true,
        phone: true
    })

    const handleChageFormData = (e: ChangeEvent<HTMLInputElement>) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
        const temp = e.target.value.trim().length;
        setDataError({
            ...dataError,
            [e.target.name]: temp > 0
        })
    }

    return (
        <>
            <article className="step-content">
                <h2>Personal info</h2>
                <p>Please provide your name, email address, and phone number.</p>
                <label htmlFor="name" className="flex justify-between">
                    <p>Name</p>
                    <p className={`text-Strawberryred  ${dataError.name ? 'hidden' : 'block'} `}>This field is required</p>
                </label>
                <input
                    className={`input-text ${!dataError.name ? 'border-Strawberryred' : 'border-Coolgray'} `}
                    type="text"
                    name={"name"}
                    id="name"
                    placeholder="e.g. Stephen King"
                    autoComplete="off"
                    value={dataForm.name}
                    onChange={handleChageFormData}
                    onBlur={handleBlur}
                />
                <label htmlFor="email" className="flex justify-between">
                    <p>Email Address</p>
                    <p className={`text-Strawberryred  ${dataError.email ? 'hidden' : 'block'} `}>This field is required</p>

                </label>
                <input
                    className={`input-text ${!dataError.email ? 'border-Strawberryred' : 'border-Coolgray'}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="e.g. stephenking@lorem.com"
                    autoComplete="off"
                    value={dataForm.email}
                    onChange={handleChageFormData}
                    onBlur={handleBlur}
                />
                <label htmlFor="phone" className="flex justify-between">
                    <p>Phone Number</p>
                    <p className={`text-Strawberryred  ${dataError.phone ? 'hidden' : 'block'} `}>This field is required</p>
                </label>
                <input
                    className={`input-text ${!dataError.phone ? 'border-Strawberryred' : 'border-Coolgray'}`}
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="e.g. +1 234 567 890"
                    autoComplete="off"
                    value={dataForm.phone}
                    onChange={handleChageFormData}
                    onBlur={handleBlur}
                />
            </article>
            <FooterBottons />
        </>
    )
}
