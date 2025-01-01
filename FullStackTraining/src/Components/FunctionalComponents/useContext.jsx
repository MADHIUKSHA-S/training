import Component2 from "./ContextComponents/Component2";
import {createContext} from 'react';
import "react";
// eslint-disable-next-line react-refresh/only-export-components
export var ThemeProvider = createContext();
var UseContext = () =>{

    return (
        <section>
            <ThemeProvider.Provider value = {{cgpa :"9.5", sgpa : "9.7"}}>
            <h1>This is an examplee of useContext</h1>
            <Component2></Component2>
            </ThemeProvider.Provider>
        </section>
    )
}
export default UseContext;