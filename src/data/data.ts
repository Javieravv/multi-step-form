export interface Plan {
    url: string;
    title: string;
    pricemonth?: string;
    priceyear?: string;
    selectedPlan: boolean;
    click?: () => void;
}

export interface Pick {
    name: string;
    description: string;
    pricemonth: string;
    priceyear: string;
    name_item: string;
    checked: boolean;
}

export const Dataplan: Plan[] = [
    {
        url: '/images/icon-arcade.svg',
        title: 'Arcade',
        pricemonth: '9',
        priceyear: '90',
        selectedPlan: false
    },
    {
        url: '/images/icon-advanced.svg',
        title: 'Advanced',
        pricemonth: '12',
        priceyear: '120',
        selectedPlan: false
    },
    {
        url: '/images/icon-pro.svg',
        title: 'Pro',
        pricemonth: '15',
        priceyear: '150',
        selectedPlan: false
    },
]

export const Pickdata: Pick[] = [
    {
        name: 'Online Service',
        description: 'Access to multiplayer games',
        pricemonth: '1',
        priceyear: '10',
        name_item: 'ckeckOnlineService',
        checked: false
    },
    {
        name: 'Larger storage',
        description: 'Extra 1TB of cloud save',
        pricemonth: '2',
        priceyear: '20',
        name_item: 'checkLargeStorage',
        checked: false
    },
    {
        name: 'Customizable Profile',
        description: 'Custom theme on your profile',
        pricemonth: '2',
        priceyear: '20',
        name_item: 'checkCustomizableProfie',
        checked: false
    },
]