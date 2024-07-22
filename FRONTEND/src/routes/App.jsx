import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
// import LoadingSpinner from '../components/LoadingSpiner'

function App() {


    return (
        <>
            <Header />
            {/* fetchStatus.currentlyFetching ? <LoadingSpinner /> : */ <Outlet />}
        </>
    )
}

export default App