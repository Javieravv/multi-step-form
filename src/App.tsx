import { FinishingUp } from "./componets/FinishingUp"
import { PersonalInfo } from "./componets/PersonalInfo"
import { PickaddOns } from "./componets/PickaddOns"
import { SelectPlan } from "./componets/SelectPlan"
import { Sidebar } from "./componets/Sidebar"
import { ThankYou } from "./componets/ThankYou"
import { useStore } from "./data/store"

const App = () => {
    const { stepActive } = useStore()
    return (
        <section className="relative flex flex-col 
    md:w-[800px] md:h-[550px] md:grid md:grid-cols-6 md:grid-rows-6 md:bg-white md:px-3 md:py-3 md:rounded">
            <Sidebar />
            { (stepActive == 1) ? <PersonalInfo /> : null }
            { (stepActive == 2) ? <SelectPlan /> : null }
            { (stepActive == 3) ? <PickaddOns /> : null }
            { (stepActive == 4) ? <FinishingUp /> : null }
            { (stepActive == 5) ? <ThankYou /> : null }
        </section>

    )
}

export default App