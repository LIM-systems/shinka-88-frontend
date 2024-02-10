import type React from "react"
import MainFiltersStyles from "./MainFilters.module.scss"
import { tabs } from '../../../../../consts'

interface IProps {
    title: string
}

export const MainFiltersButton: React.FC<IProps> = ({ title }) => {
    let buttonStyles = MainFiltersStyles.sendButton
    if (title !== tabs[0]) {
        buttonStyles = MainFiltersStyles.sendButton + ' ' + MainFiltersStyles.below
    }
    return (
        <button className={buttonStyles}>{title}</button>
    )
}