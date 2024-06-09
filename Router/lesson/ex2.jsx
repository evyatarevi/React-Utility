import Login from 'components'

const router = createBrowserRouter ([
    {
        path:'/',
        element: <LoggedOffLayout/>,
        children: [
            {
                index: true, // if not exist end path
                element: <Login/>
            }, 
            {
                path: 'register',
                element: <Register/>

            }
        ]
    },
    {
        path: '/app',
        element: <LoggedLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'search',
                element: <Profile/>
            }
        ]
    }
    {
        path: '*',
        element: <NotFound/>
    }
]);






// components
const LoggedOffLayout = () => {

    return(
        <main>
            {/* Outlet is dynamic. check which element to render, corresponding to the end path. In our case is  Login or Register*/}
            <Outlet/> 
        </main>
    )

}

const Login = () => {

    return 
}

const Nav = () => {

    return (
        <nav>
            <Link to='/app/search'/>
        </nav>
    )
}