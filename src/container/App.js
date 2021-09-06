import react from 'react'
import { Route } from 'react-router'
import AboutPaje from '../pajes/About/AboutPaje'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import './reset.css'
const App = () => {
    return (
        <div>
            <Header />
            <Route path="/about" component={AboutPaje} />
            <Main />
            <Footer />
        </div>
    )
}
export default App
