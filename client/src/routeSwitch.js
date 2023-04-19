import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./components/register";
import Error from "./components/error";
import Login from "./components/login";
//create addtask and edit task
import AddTask from "./components/addTask";
import EditTask from "./components/editTask";

const RouteSwitch = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/login" element={ <Login />}/>
                <Route path="/register" element={ <Register />}/>

                <Route path="/tasks/add" element={<AddTask />} />
                <Route path="/tasks/edit/:id" element={<EditTask />} />

                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;