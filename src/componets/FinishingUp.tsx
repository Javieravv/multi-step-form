import { useStore } from "../data/store"
import { FooterBottons } from "./FooterBottons"

export const FinishingUp = () => {
    const { planSelected, Pickdata, planMonthly, resetStep } = useStore()
    const priceMonth = planSelected?.pricemonth || '0'
    const priceYear = planSelected?.priceyear || '0'
    let totalPlan: number = 0;
    // Calculamos los totales
    !planMonthly ? totalPlan += parseInt(priceMonth) : totalPlan += parseInt(priceYear);
    // Valores adicionales
    Pickdata.forEach(pick => {
        if (!planMonthly) {
            pick.checked ? totalPlan += parseInt(pick.pricemonth) : totalPlan += 0
        } else {
            pick.checked ? totalPlan += parseInt(pick.priceyear) : totalPlan += 0
        }
    })

    return (
        <>
            <article className="step-content">
                <h2>Finishing up</h2>
                <p>Double-check everything looks OK before confirming.</p>
                <div className="flex flex-col bg-Magnolia px-4 text-Coolgray">
                    <div className="flex justify-between items-center py-4 border-b-[1px] ">
                        <div>
                            {planSelected != null
                                ? (
                                    <>
                                        <p className="text-Marineblue font-bold">{planSelected.title} ( {!planMonthly ? 'Monthly' : 'Yearly'} ) </p>
                                    </>
                                )
                                : (
                                    <p>Please, select a plan</p>
                                )
                            }
                            <a
                                href="#"
                                onClick={() => resetStep()}
                                className="hover:text-Purplishblue"
                            >
                                Change
                            </a>
                        </div>
                        <div className="font-bold text-Marineblue">
                            {
                                planSelected != null ?
                                    !planMonthly ? `+$${planSelected?.pricemonth}/mo'` : `+$${planSelected?.priceyear}/ye'`
                                    : null
                            }
                        </div>
                    </div>

                    {/* TODO: Esto saldrá de un array!! */}
                    {
                        Pickdata.map(pick => (
                            pick.checked &&
                            (
                                <div className="flex justify-between items-center py-2" key={pick.name}>
                                    <p>{pick.name}</p>
                                    <p className="font-bold text-Marineblue opacity-70">
                                        {/* +$1/mo */}
                                        {!planMonthly
                                            ? `+$${pick.pricemonth}/mo'`
                                            : `+$${pick.priceyear}/ye'`
                                        }
                                    </p>
                                </div>
                            )
                        ))
                    }

                </div>

                <div className="flex justify-between items-center px-4 py-4 text-Coolgray ">
                    <p>Total (per {!planMonthly ? 'month' : 'year'})</p>
                    <p className="font-bold text-Purplishblue text-xl">
                        {
                            planSelected != null
                                ? `$${totalPlan}${!planMonthly ? '/mo' : '/yr'}  `
                                : null
                        }
                    </p>
                </div>
            </article>
            <FooterBottons />
        </>
    )
}
