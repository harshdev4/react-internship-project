import './Footer.scss';

const Footer = ()=>{
    return (
        <>
            <footer>
                <div className="footerLinks">
                    <div className="footer-section">
                        <h2 className="footerHead">CATEGORIES</h2>
                        <a className="footerLink" href="">Web Builder</a><a className="footerLink" href="">Hosting</a><a className="footerLink" href="">Data Center</a><a className="footerLink" href="">Robotic-Automation</a>
                    </div>

                    <div className="footer-section">
                        <h2 className="footerHead">Contact</h2>
                        <a href="" className="footerLink">Contact</a><a href="" className="footerLink">Privacy Policy</a><a href="" className="footerLink">Terms Of Service</a><a href="" className="footerLink">Categories</a><a href="" className="footerLink">About</a>
                    </div>

                    <div className="footer-section">
                        <h4 className='footerLink'>United States <i className="fa-solid fa-chevron-down"></i></h4>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer; 