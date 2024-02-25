import './PricingList.scss';

const PricingList = ()=>{
    const pricingArr = Array.from({ length: 3 });
    return (
        <div className="price-container">
            { 
                pricingArr.map((_, index)=> (
                    <div className="price-section">
                        <div className="img-container">
                            <img src="img/toolImg.png" alt="tool" />
                        </div>

                        <div className="Label"><span className="discount Label">20% Off</span>
                        <span className="discount Label">Limited time</span></div>
                        <h3>Webbuilder 1</h3>
                        <p>Computer  Modern clasic with wix support</p>
                        <div className="pricing">
                            <h3>$39.96</h3>
                            <h4>$49.96</h4> 
                            <h5>(20% Off)</h5>
                        </div>
                        <button className='viewBtn viewDeal'>View Deal</button>
                    </div>
                )) 
            }
        </div>
    )
}

export default PricingList;