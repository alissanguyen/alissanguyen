import * as React from 'react';

interface Props {

}

const ThemeButton: React.FC<Props> = ({ }) => {
    const [theme, setTheme] = React.useState('dark')

    const toggleTheme = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
      }
    return (
        <button>theme</button>
    )
}

export default ThemeButton