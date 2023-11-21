import { FooterBottons } from "./FooterBottons"
import { useStore } from "../data/store"

export const PickaddOns = () => {
    const { planMonthly, Pickdata, handlePick } = useStore()

    return (
        <>
            <article className="step-content">
                <h2>Pick add-ons</h2>
                <p>Add-ons help enhance your gaming experience.</p>
                {
                    Pickdata.map(pick => (
                        <div
                            className={`item-pick ${pick.checked ? 'border-Marineblue bg-Lightblue bg-opacity-30' : 'border-Coolgray'} `}
                            key={pick.name}
                        >
                            <div className="item-pick_check">
                                <input
                                    className="checkbox-pick"
                                    type="checkbox"
                                    name={pick.name_item}
                                    id={pick.name_item}
                                    checked={pick.checked}
                                    onChange={() => {
                                        pick.checked = !pick.checked
                                        handlePick(pick)
                                    }}
                                />
                            </div>
                            <div className="item-pick_option">
                                <p className="item-pick_title">{pick.name}</p>
                                <p>{pick.description}</p>
                            </div>
                            <div className="item-pick_price">
                                {!planMonthly ? <p>+${pick.pricemonth}/mo</p> : <p>+${pick.priceyear}/ye</p>}
                            </div>
                        </div>
                    ))
                }
            </article>
            <FooterBottons />
        </>
    )
}
