import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TextField} from '@material-ui/core';

/**
 * Отстраивает поля фильтра
 */
class FilterField extends Component{

    static propTypes = {
        field:PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        value: PropTypes.string,
        onChange:PropTypes.func
    };

    static defaultProps = {
        field: 'code',
        label: 'Название поля',
        placeholder: 'Введите данные поля',
        value: '',
        onChange: ()=>{}
    };

    render () {

        const {field, label, placeholder, value, onChange} = this.props;
        return (
            <TextField
                id={field}
                label={label}
                placeholder={placeholder}
                margin="normal"
                value={value}
                onChange={(event)=>{onChange(event.target.value)}}
            />
        );
    }
}

export default FilterField;
