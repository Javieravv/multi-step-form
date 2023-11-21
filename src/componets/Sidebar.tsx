import { useStore } from "../data/store"

export const Sidebar = () => {
    const { stepActive } = useStore()

    return (
        <nav className="h-[200px] bg-sidebar-mobile bg-cover bg-no-repeat flex justify-center pt-10 
    md:h-full md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-7 md:bg-sidebar-desktop md:flex-col md:justify-start md:px-5 md:rounded-md md:space-y-7">
            <article className="content-item">
                <div className={`item-sidebar ${stepActive == 1  ? 'border-[0px] bg-Lightblue opacity-80 text-Marineblue font-bold ' : 'border-[2px]'}`}>1</div>
                <div className="div-step">
                    <p className="p-step">Step 1</p>
                    <p className="p-step-title">Your info</p>
                </div>
            </article>
            <article className="content-item">
                <div className={`item-sidebar ${stepActive == 2  ? 'border-[0px] bg-Lightblue opacity-80 text-Marineblue font-bold' : 'border-[2px]'}`}>2</div>
                <div className="div-step">
                    <p className="p-step">Step 2</p>
                    <p className="p-step-title">Select plan</p>
                </div>
            </article>
            <article className="content-item">
                <div className={`item-sidebar ${stepActive == 3  ? 'border-[0px] bg-Lightblue opacity-80 text-Marineblue font-bold' : 'border-[2px]'}`}>3</div>
                <div className="div-step">
                    <p className="p-step">Step 3</p>
                    <p className="p-step-title">Add-ons</p>
                </div>
            </article>
            <article className="content-item">
                <div className={`item-sidebar ${stepActive >= 4  ? 'border-[0px] bg-Lightblue opacity-80 text-Marineblue font-bold' : 'border-[2px]'}`}>4</div>
                <div className="div-step">
                    <p className="p-step">Step 4</p>
                    <p className="p-step-title">Summary</p>
                </div>
            </article>
        </nav>
    )
}
