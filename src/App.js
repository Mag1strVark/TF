import s from './App.css'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Main/Hero'
import SubPage from './components/SubPage/SubPage'
import Delivery from './components/Delivery/Delivery'
import Feedback from './components/Feedback/Feedback'
import Footer from './components/Footer/Footer'

function App(props) {
    return (
        <div className={s.app}>
            <Navigation/>
            <Hero/>
            <SubPage listData={props.appState.listData}/>
            <Delivery/>
            <Feedback feedbackData={props.appState.feedbackData}/>
            <Footer/>
        </div>
    )
}

export default App
