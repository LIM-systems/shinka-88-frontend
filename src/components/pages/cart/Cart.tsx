import type React from "react"
import CartStyles from "./CartStyles.module.scss"
import '../../../common.scss'
import { Footer } from "../../footer/Footer"
import Checkbox from "react-custom-checkbox";
import { CartTyresCards } from "./blocks/cards/CartTyresCards";
import { OrderInfo } from "../blocks/orderInfo/OrderInfo";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { disksDataSelector, resetCart, selectAllHandler, selectAllSelector, type selectedType, tyresDataSelector } from "./cartSlice";
import { tabs } from "../../../consts";
import { CartDisksCards } from "./blocks/cards/CartDisksCards";
import { type resultsTyresType } from "../main/blocks/filters/filtersBlocks/filterBlock1Slice";
import { type resultsDisksType } from "../main/blocks/filters/filtersBlocks/filterBlock2Slice";

export const Cart: React.FC = () => {
    const dispatch = useAppDispatch()
    const tyres = useAppSelector(tyresDataSelector)
    const disks = useAppSelector(disksDataSelector)
    const cardData: Array<(selectedType & resultsTyresType) | (selectedType & resultsDisksType)>
        = [...tyres, ...disks].sort((a, b) => a.queue - b.queue)
    const selectAll = useAppSelector(selectAllSelector)
    let wrapperStyle = cardData.length === 0
        ? CartStyles.contentWrapper + ' ' + CartStyles.contentWrapperAnotherWidth
        : CartStyles.contentWrapper
    return (
        <div className={CartStyles.mainWrapper}>
            <div className={wrapperStyle}>
                <p className="pageTitle">Корзина</p>
                <div className={CartStyles.content}>
                    <div className={CartStyles.leftBlock}>
                        <div className={CartStyles.actionForAll}>
                            {<Checkbox
                                icon={<div className={CartStyles.icon}></div>}
                                label={'Выбрать все'}
                                className={CartStyles.checkboxCN}
                                labelClassName={CartStyles.checkboxLCN}
                                borderRadius={10}
                                borderColor={'#000'}
                                checked={selectAll}
                                onChange={() => dispatch(selectAllHandler())}
                            // onChange={() => dispatch(checkboxesSelect(checkboxesNames[0]))}
                            />}
                            <p onClick={() => dispatch(resetCart())} className={CartStyles.clearCart}>Очистить корзину</p>
                        </div>
                        <div className={CartStyles.cards}>
                            {cardData.map((item, index) => {
                                if (item.product_type === tabs[0]) {
                                    return <CartTyresCards data={item as selectedType & resultsTyresType} key={`${item} - ${index}`} />
                                }
                                return <CartDisksCards data={item as selectedType & resultsDisksType} key={`${item} - ${index}`} />
                            })}
                        </div>
                    </div>
                    <OrderInfo nameButton='ОФОРМИТЬ ЗАКАЗ' name='В корзине' />
                </div>
            </div>
            <Footer />
        </div>
    )
}