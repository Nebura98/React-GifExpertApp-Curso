import React ,{useState}from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputAdd = (e) => {
        setinputValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //Para prevenir tener que recargar el formulario cada vez que se actulice.
        if ( inputValue.trim().length>2){
            setCategories( cats => [inputValue,...cats])
            setinputValue('');
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
                type = 'text'
                placeholder = {inputValue}
                onChange = {handleInputAdd}
            />
        </form>
    )
};

AddCategory.prototype= {
    value :  PropTypes.func.isRequired
};