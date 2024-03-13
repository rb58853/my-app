import { useSelector } from 'react-redux'
import StepsBuy from '../../stepsBuy/StepsBuy'
import './style/desktop.css'
import './style/mobile.css'
import '../../../../../style/style.css'


function DesktopBuyBox({ subtotal }) {
    return (
        <div className="buy-box-2 buy-box-2-desktop">
            <StepsBuy step={1} />
            <a className='order-sumary-button'
                href=''
            >
                Order Sumary
            </a>
            <div className='notes'>
                <div>
                    <text>
                        Notes or instructions (optional)
                    </text>
                    <input className="input-notes"
                        type="text" />
                </div>
            </div>
            <div className='pays-cost-space'>
                <div className='row-cost'>
                    Subtotal:
                    <text>
                        {"$" + subtotal}
                    </text>
                </div>
                <div className='row-cost'>
                    Shipping:
                    <text>
                        {"$0"}
                    </text>
                </div>
                <div className='row-cost'>
                    Tax:
                    <text>
                        {"$0"}
                    </text>
                </div>
            </div>
            <div className='total-cost-row'>
                <div>
                    Total:
                    <text>
                        {"$" + subtotal}
                    </text>
                </div>
            </div>
        </div>
    )
}

function MobileBuyBox({ subtotal }) {
    return (
        <div className="buy-box-2-mobile">
            <div className='full-box-2'>
                <div className='notes'>
                    <text>
                        Notes or instructions (optional)
                    </text>
                    <input className="input-notes"
                        type="text" />
                </div>
                <div className='pays-cost-space'>
                    <b>Order Sumary</b>
                    <div className='row-cost'>
                        Subtotal:
                        <hr className='row-cost-line' />
                        <text>
                            {"$" + subtotal}
                        </text>
                    </div>
                    <div className='row-cost'>
                        Shipping:
                        <hr className='row-cost-line' />
                        <text>
                            {"$0"}
                        </text>
                    </div>
                    <div className='row-cost'>
                        Tax:
                        <hr className='row-cost-line' />
                        <text>
                            {"$0"}
                        </text>
                    </div>
                </div>
                <div className='total-cost-row'>
                    <div>
                        Total:
                        <text>
                            {"$" + subtotal}
                        </text>
                    </div>
                </div>
            </div>
            <StepsBuy step={1} />
        </div>
    )
}

function BuyBox2() {
    let subtotal = 0
    const bag = useSelector((state) => state.bag)
    Object.values(bag.products).forEach(item => {
        subtotal += parseFloat(item["product"].price) * parseInt(item["count"]);
    })
    subtotal = subtotal.toFixed(2)

    return (
        <section className='full'>
            <DesktopBuyBox subtotal={subtotal} />
            <MobileBuyBox subtotal={subtotal} />
        </section>
    )


}
export default BuyBox2