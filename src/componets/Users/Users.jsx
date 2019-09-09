import React, {Component} from 'react'
import {ApiData, filter} from "../../redux/actions/users";
import {connect} from "react-redux";
import {Container} from '@material-ui/core';
import UsersTable from "../UsersTable/UsersTable";
import Filter from "../Filter/Filter";

const enhance = connect(
    ({ data }) => ({ data }),
    { ApiData, filter }
);

class Users extends Component {

    /**
     * Делаем вызов к АПИ, при данном action, будет запускаться нужная saga
     */
    componentDidMount () {
        this.props.ApiData(); //
    }

    render() {
        const {list, filter} = this.props.data;
        const field = [
            {
                field:'username',
                label:'Username',
                placeholder: 'Введите username'
            },
            {
                field:'website',
                label:'Website',
                placeholder: 'Введите website'
            },
        ]; // Массив в полями фильтра, массив можно изменять (можно добавить другие поля дял фильтрации)
        return (
            <Container fixed>
                <Filter isFilter={filter.isFilter} field={field} data={filter.data} saveFilter={(isFilter, data)=>{this.props.filter(isFilter, data)}}/>
                <UsersTable list={list} isFilter={filter.isFilter} dataFilter={filter.data} />
            </Container>
        )
    }
}

export default enhance(Users);
