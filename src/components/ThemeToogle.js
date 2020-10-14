import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToogle = () => {
    const {toogleTheme} = useContext(ThemeContext);
    return ( <button onClick={toogleTheme}>Toogle the theme</button> )
}
export default ThemeToogle;

// class ThemeToogle extends Component {    
//     static contextType = ThemeContext;
//     render() { 
//         const {toogleTheme} = this.context;
//         return ( 
//             <button onClick={toogleTheme}>Toogle the theme</button>
//          );
//     }
// }