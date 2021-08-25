import react from 'react'
import Articles from '../../components/Articles/Articles'
import Posts from '../../components/Posts/Posts'

const Main = () => {
    return (
        <div>
            <div>Container maxWidth lg</div>
            <h2>Main</h2>
            <Posts />
            <Articles />
        </div>
    )
}
export default Main
