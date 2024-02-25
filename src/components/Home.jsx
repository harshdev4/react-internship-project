import './Home.scss';
import ToolList from './ToolList';
import PricingList from './PricingList';
import Filter from './Filter';
import Navigation from './Navigation';

const Home = ()=>{
    return (
        <div className='HomePage'>
            <Filter></Filter>
            <div className="linkContainer">
                <div className="links">
                <a href="" className="link">Tools</a> 
                <a href="" className="link">AWS Builder</a>
                <a href="" className="link">Start Build</a>
                <a href="" className="link">Build Supplies</a>
                <a href="" className="link">Tooling</a>
                <a href="" className="link">BlueHosting</a>
                </div>
            </div>
            <Navigation></Navigation>
            <ToolList></ToolList>
            <h2 className='homeDealHeading'>Related deals you might like for</h2>
            <PricingList></PricingList>
            <div className="signUp-section">
                <h2>Sign up and get exclusive special deals</h2>
                <button className="signUpBtn">Sign Up</button>
            </div>
        </div>

    )
}

export default Home;