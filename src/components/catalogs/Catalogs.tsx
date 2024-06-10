import type React from "react"
import CatalogStyles from "./CatalogStyles.module.scss"
import '../../common.scss'
import { SortHeader } from "./blocks/sortHeader/SortHeader"
import { DesktopFilters } from "./blocks/filters/DesktopFilters"
import { CardDesktop } from "./blocks/card/CardDesktop"
import { SortHeaderMobile } from "./blocks/sortHeader/SortHeaderMobile"
import { MobileFilters } from "./blocks/filters/MobileFilters"
import { CardMobile } from "./blocks/card/CardMobile"
import { useLocation } from "react-router-dom"
import { useAppDispatch, useCatalogDataHook } from "../../app/hooks"
import { addToCart } from "../pages/cart/cartSlice"
import type { resultsType } from "../pages/main/blocks/filters/filtersBlocks/filterBlock1Slice"


export const Catalogs: React.FC = () => {
    const { pathname } = useLocation()
    const catalogData = useCatalogDataHook(pathname)
    const dispatch = useAppDispatch()

    const addToCartHandler = (data: resultsType) => {
        dispatch(addToCart(data))
    }

    return (
        <div className={CatalogStyles.mainWrapper}>
            <p className="pageTitle">{catalogData.title}</p>
            <SortHeader />
            <div className={CatalogStyles.content}>
                <DesktopFilters filterBlocks={<catalogData.filtersBlocks />} />
                <div className={CatalogStyles.cards}>
                    {catalogData.cardsData.results.map((item, index) => {
                        return <CardDesktop handler={addToCartHandler} data={item} key={`${item} - ${index}`} />
                    })}
                </div>
            </div>
            <div className={CatalogStyles.contentMobile}>
                <div className={CatalogStyles.sortFilter}>
                    <SortHeaderMobile />
                    <MobileFilters />
                </div>
                <div className={CatalogStyles.cardsMobile}>
                    {catalogData.cardsData.results.map((item, index) => {
                        return <CardMobile handler={addToCartHandler} data={item} key={`${item} - ${index}`} />
                    })}
                </div>
            </div>
        </div>
    )
}