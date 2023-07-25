import { 
    createBrowserRouter, 
    createRoutesFromElements,
    Route
} from "react-router-dom";
import Root from "./root";
import { Details } from "./details";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' index={false}>
            <Route path=':url' element={<Details />} />
            <Route index element={<Root/>} />
        </Route>
    )
)

export default router
