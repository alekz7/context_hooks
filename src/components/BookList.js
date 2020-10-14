import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default class BookList extends Component {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div className="book-list" style={{ color: theme.syntax, backbroung: theme.bg}}>
                <ul>
                    <li style={{ background: theme.ui }}>One</li>
                    <li style={{ background: theme.ui }}>Two</li>
                    <li style={{ background: theme.ui }}>Three</li>
                    <li style={{ background: theme.ui }}>Four</li>
                </ul>
            </div>
        )
    }
}
