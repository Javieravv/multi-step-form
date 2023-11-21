import { FC } from "react"
import { Checbox } from "./Chekbox"
import { FooterBottons } from "./FooterBottons"
import { useStore } from "../data/store"
import { Plan } from "../data/data"

export const SelectPlan: FC = () => {
    const { planMonthly, planYearly, Plandata, handlePlan, handleSelectedPlan, handlePlanSelected } = useStore()

    const handleClick = (plan: Plan) => {
        plan.selectedPlan = true;
        Plandata.map(planTemp => {
            if (plan.title != planTemp.title) {
                planTemp.selectedPlan = false
            } else return plan
        })
        handleSelectedPlan(Plandata)
        handlePlanSelected(plan)
    }

    return (
        <>
            <article className="step-content">
                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing.</p>
                <div className="md:flex md:gap-1">
                    {
                        Plandata.map(data => (
                            <div
                                className={`item-plan ${data.selectedPlan ? 'border-Marineblue bg-Lightblue bg-opacity-30' : 'border-Coolgray'}`}
                                onClick={() => {
                                    handleClick(data)
                                }}
                                key={data.title}
                            >
                                <img src={data.url} alt={data.url} />
                                <div className="item-plan_option">
                                    <h3>{data.title} </h3>
                                    {!planMonthly
                                        ? (<p>${data.pricemonth}/mo</p>)
                                        : (<>
                                            <p>${data.priceyear}/ye</p>
                                            <p className="text-Marineblue font-bold text-[12px] tracking-tight  md:text-[16px]">2 months free</p>
                                        </>
                                        )}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="bg-Pastelblue opacity-60 py-3 flex justify-center items-center space-x-5 rounded md:mt-5">
                    <p className={`font-bold ${planMonthly ? 'text-Lightgray' : 'text-Marineblue'} `}>Monthly</p>
                    <Checbox
                        checked={planMonthly}
                        setChecked={handlePlan}
                    />
                    <p className={`font-bold ${planYearly ? 'text-Lightgray' : 'text-Marineblue'} `}>Yearly</p>
                </div>
            </article>
            <FooterBottons />
        </>
    )
}
