import type React from "react"
import GuaranteesStyles from "./GuaranteesStyles.module.scss"
import { Footer } from "../../footer/Footer"
import '../../../common.scss'
import { links } from "../../../consts"
import tire from '../../../imgs/tiresgarant.png'
import { Helmet } from "react-helmet-async"


export const Guarantees: React.FC = () => {

    return (
        <>
            <Helmet>
                <title>Шинка88 - Гарантия</title>
            </Helmet>
            <div className={GuaranteesStyles.mainWrapper}>
                <div className={GuaranteesStyles.contentWrapper}>
                    <p className="pageTitle">{links[13].title}</p>
                    <div className={GuaranteesStyles.content}>
                        <p className={GuaranteesStyles.text}>
                            <img className={GuaranteesStyles.img} src={tire} alt="tire" />
                            <p className={GuaranteesStyles.firstText}>
                                Компания “Шинка88” предоставляет своим клиентам расширенную гарантию на
                                все приобретенные автотовары и услуги.
                                Расширенная гарантия является дополнением к стандартным гарантийным условиям
                                производителей и распространяется на эксплуатационные повреждения шин, дисков и
                                аккумуляторов.</p>
                            <p className={GuaranteesStyles.titleText}>Воспользоваться Расширенной гарантией возможно при соблюдении следующих условий:</p>
                            <p><ul>
                                <li>Вы приобрели комплект шин или дисков (не менее 4 шт. в нашем магазине по адресу г. Егорьевск, ул. Рязанская, ГСК ЦЕНА  или на сайте www.shinka88.ru.</li>
                                <li>Вы получили подтверждение активации и присвоенный НОМЕР расширенной гарантии
                                    Вы сохранили документы, подтверждающие факт покупки</li>
                                <li>Вы сохранили документы, подтверждающие факт покупки</li>
                            </ul></p><br />
                            <p>При эксплуатационном повреждении шины (прокол, порез, вздутие боковины, разрыв, выпадение шипов) Вы можете <span className={GuaranteesStyles.orangeText}>в течение срока действия расширенной гарантии</span> обратиться в наш автосервис, где Вам     бесплатно произведут ремонт шины. Если ремонт невозможен, мы бесплатно заменим шину на новую. Ремонтопригодность шины определяет сотрудник нашей компании, осуществляющий замену.</p>
                            <br />
                            <p>Если необходимой модели шин нет в наличии в магазине на момент обращения, сотрудники предложат покупателю <span className={GuaranteesStyles.orangeText}>замену или альтернативные варианты в течение 90 дней.</span></p>
                            <br />
                            <p>Если необходимой шины нет на складе компании, покупателю могут предложить <span className={GuaranteesStyles.orangeText}>замену на другую модель</span>, которая соответствует характеристикам исходной шины, или выплатить <span className={GuaranteesStyles.orangeText}>денежную компенсацию</span>. Денежная компенсация выплачивается только в том случае, если шина не подлежит ремонту и отсутствует на складе. Сумма компенсации равна сумме, уплаченной покупателем при покупке шины. Для подтверждения суммы, уплаченной покупателем, необходимо предоставить оригинал или копию платежного документа.</p>
                            <p className={GuaranteesStyles.titleText}>Программа Расширенной гарантии не распространяется на:</p>
                            <p><ul>
                                <li>акты вандализма (актом вандализма считается намеренная/умышленная порча или уничтожение шины);</li>
                                <li>повреждения шин, полученные в результате действий представителей правоохранительных и любых других органов, направленных на принудительную остановку транспортного средства с применением специальных или иных технических средств;</li>
                                <li>случаи повреждений шин, связанные с особенностями эксплуатации и не ведущие к выходу шины из строя, не нарушающие ее герметичности. К ним относятся неравномерный износ шины при экстренном торможении с блокировкой колеса, износ, обусловленный манерой вождения Потребителя, спецификой дорожного полотна (гравий, щебень и т.д.), износ при эксплуатации в спортивном режиме, поверхностные косметические повреждения, не ведущие к потере эксплуатационных свойств и т.п.;</li>
                                <li>случаи повреждений шин, связанные с несоблюдением правил эксплуатации автомобильных шин и Технического регламента о безопасности колесных транспортных средств утвержденный Постановлением Правительства РФ от 10.09.2009 года №720, ведущие к повреждениям шины: установка на автомобиль шин, несоответствующих сезону (зимний сезон - температура воздуха ниже 7°С; летний сезон - температура воздуха выше 8°С), несоблюдение типоразмера, индекса нагрузки и индекса скорости, указанных в руководстве по эксплуатации данного автомобиля;</li>
                                <li>повреждения шины в результате эксплуатации без давления, т.е. шины, имеющие разрывы боковины с частичным или полным отделением боковины и бортовой части шины от протектора и других сопряжённых элементов шины; разрывы, осыпание, оплавление внутреннего герметизирующего слоя, вызванные эксплуатацией без давления, даже если потеря давления изначально была вызвана механическим повреждением шины и место этого повреждения невозможно определить;</li>
                                <li>случаи повреждений шин в результате продолжительного трения шины о сторонние предметы: кузов автомобиля, элементы подвески автомобиля, бордюрные камни и другие выступающие предметы, а также повреждения шин в результате продолжительной пробуксовки шин с трением о выступающие предметы;</li>
                                <li>повреждения шин, полученные в результате ДТП;</li>
                                <li>на шины, которые ранее были отремонтированы;</li>
                                <li>на повреждения, полученные в процессе монтажа;</li>
                                <li>на шины, полученные безвозмездно;</li>
                                <li>на шины, приобретённые Потребителем в сторонних шинных центрах;</li>
                                <li>на случаи, когда Потребитель обратился в Шинный центр по истечении срока гарантии;</li>
                                <li>на шины, участвующие в распродаже;</li>
                                <li>на шины, приобретенные юридическими лицами.</li>
                            </ul></p>
                        </p>

                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}