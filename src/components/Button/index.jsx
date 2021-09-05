/* eslint-disable react/jsx-no-duplicate-props */
// Styles
import './styles.css'

export const Button = ({ text, onClick, disabled }) => {
    return (
        <button 
            disabled 
            className="button" 
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    )
}