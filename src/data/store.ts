import { create } from 'zustand'
import { Dataplan, Pick, Pickdata, Plan } from './data'

type Store = {
    stepActive: number
    planMonthly: boolean
    planYearly: boolean
    Pickdata: Pick[]
    Plandata: Plan[]
    planSelected: Plan | null
    totalPlan: {
        totalMonth: number,
        totalYear: number
    }
    incStep: (valueInc: number) => void
    resetStep: () => void
    handlePlan: () => void
    handleSelectedPlan: (plan: Plan[]) => void
    handlePick: (pick: Pick) => void
    handlePlanSelected: (plan: Plan) => void
}

export const useStore = create<Store>()((set) => ({
    stepActive: 1,
    planMonthly: false,
    planYearly: true,
    Pickdata: Pickdata,
    Plandata: Dataplan,
    planSelected: null,
    totalPlan: {
        totalMonth: 0,
        totalYear: 0
    },
    incStep: (valueInc: number) => set((state) => ({ stepActive: state.stepActive + valueInc })),
    resetStep: () =>  set((state) => ({ ...state, stepActive: 2 })),
    handlePlan: () => set((state) => (
        {
            planMonthly: !state.planMonthly,
            planYearly: !state.planYearly
        }
    )),
    handlePick: (pick: Pick) => set((state) => (
        {
            ...state,
            pick
        }
    )),
    handleSelectedPlan: (plan: Plan[])=> set((state) => (
        {
            ...state,
            plan
        }
    )),
    handlePlanSelected: (plan: Plan) => set((state) => (
        {
            ...state,
            planSelected: plan
        }
    )),

}))
