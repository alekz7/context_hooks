import React, {useContext } from 'react'
import { BookContext } from '../contexts/BookContext';
import { ThemeContext } from '../contexts/ThemeContext'

const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return (   
        <div className="book-list" style={{ color: theme.syntax, backbroung: theme.bg}}>
            <ul>
                {books.map(book=>{
                    return(
                        <li key={book.id} style={{ background: theme.ui }}>{book.title}</li>
                    )
                })}                
            </ul>
        </div> );
}
 
export default BookList;

// export default class BookList extends Component {
//     static contextType = ThemeContext;    
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;

//         return (
//             <div className="book-list" style={{ color: theme.syntax, backbroung: theme.bg}}>
//                 <ul>
//                     <li style={{ background: theme.ui }}>One</li>
//                     <li style={{ background: theme.ui }}>Two</li>
//                     <li style={{ background: theme.ui }}>Three</li>
//                     <li style={{ background: theme.ui }}>Four</li>
//                 </ul>
//             </div>
//         )
//     }
// }