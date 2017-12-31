import Header from './Header';
import Meta from './Meta'
import Footer from './Footer'
export default (props) => {
    return (
        <div className='wapper'>
            <Header/>
            <Meta/>
            <div className="page">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}