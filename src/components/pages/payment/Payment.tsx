import type React from "react"
import PaymentStyles from "./PaymentStyles.module.scss"
import { Footer } from "../../footer/Footer"
import { links } from "../../../consts"
import { NavLink } from "react-router-dom"
import { Helmet } from "react-helmet-async"


export const Payment: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Шинка88 - Оплата</title>
            </Helmet>
            <div className={PaymentStyles.mainWrapper}>
                <div className={PaymentStyles.contentWrapper}>
                    <p className="pageTitle">{links[11].title}</p>
                    <div className={PaymentStyles.content}>
                        <p>На данном сайте Вы можете оформить заказ всех необходимых автотоваров и услуг.
                            Для этого добавьте нужные товары в корзину или свяжитесь с нами по телефону
                            <a href='tel:+79197728888'
                                className={PaymentStyles.orangeText}> +7 (919) 772 88 88</a>.
                            Подверждение заказа производится менеджером по телефону.
                            При оформлении заказа на сайте Вы можете указать свою электронную почту для
                            автоматической рассылки уведомлений об изменении статуса заказа.
                            Менеджер также дополнительно уведомит Вас о поступлении товаров.
                            Онлайн-оплата на сайте недоступна. Все приобретенные товары оплачиваются при
                            получении в пункте выдачи.</p>
                        <p>При оформлении заказа на сайте Вы можете указать свою электронную почту для
                            автоматической рассылки уведомлений об изменении статуса заказа.
                            Менеджер также дополнительно уведомит Вас о поступлении товаров.
                            Онлайн-оплата на сайте недоступна. <span className={PaymentStyles.orangeText}>Все приобретенные товары оплачиваются при
                                получении в пункте выдачи.</span>  </p>
                        <p>Также вы сможете получить профессиональную консультацию, подобрать сопутствующие
                            товары, воспользоваться услугами шиномонтажа, автосервиса и сезонного хранения колес.</p>
                        <p>Уточнить адрес и график работы Вы можете на <NavLink to={links[0].link}
                            className={PaymentStyles.orangeText}>Главной странице.</NavLink> </p>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}