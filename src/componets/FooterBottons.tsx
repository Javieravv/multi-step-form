import { useStore } from "../data/store"

export const FooterBottons = () => {
    const { stepActive, planSelected, incStep } = useStore()
    let controlConfirm: boolean = true
    if (stepActive == 4) {
        controlConfirm = (planSelected != null && stepActive == 4)
    }
    
    return (
        <div className={`bg-white w-full py-4 mt-6 bottom-0 right-0 flex 
                ${stepActive > 1 ? 'justify-between' : 'justify-end'} px-4 
                md:col-start-3 md:col-end-7 md:px-10 md:mx-0 md:mt-0`}>
            {(stepActive > 1) ? (
                <button
                    className="botton-options border-none text-Lightgray font-semibold px-3 py-3 md:px-2" 
                    onClick={() => incStep(-1)}
                >
                    Go Back
                </button>
            ) : null
            }
            <button
                className="botton-options border-none bg-Marineblue text-white rounded px-8 py-3 hover:opacity-80 transition-all duration-300"
                onClick={() => incStep(1)}
                disabled={!controlConfirm}
            >
                { stepActive == 4 ? 'Confirm' : 'Next Step'}
            </button>
        </div>
    )
}
