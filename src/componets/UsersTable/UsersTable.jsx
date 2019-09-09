import React, {Component} from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Grid} from '@material-ui/core';
import PropTypes from 'prop-types';
import Popup from "../Popup/Popup";

/**
 * Таблица users
 */
class UsersTable extends Component{

    static propTypes = {
        list: PropTypes.array,
        isFilter:PropTypes.bool,
        dataFilter:PropTypes.object,
    };

    static defaultProps = {
        list:[],
        iisFilter:false,
        dataFilter: {},
    };

    state = {
        popup: {
            visible: false,
            user: {}
        }
    };

    /**
     * Фильтруем список по заполненным полям фильтра
     * @returns {UsersTable.props.list}
     */
    setFilter () {
        const {list, isFilter, dataFilter} = this.props;
        let filter = list;

        if (isFilter) {

            for (let key in dataFilter) {
                 let field = dataFilter[key].toLowerCase();
                 if (field === '') continue;

                 filter = filter.filter((elem) => {
                    if (elem[key].toLowerCase().indexOf(field) !== -1) return true;
                 })
            }
        }

        return filter
    }

    /**
     * Открываем попап-окно
     * @param user
     */
    openPopup(user) {
        if (!user) return;
        const popup = {
            visible:true,
            user:user,
        };
        this.setState({popup:popup});
    }


    render () {
        const {popup} = this.state;
        const list = this.setFilter(); // Получаем отфильтрованный список

        return( <Grid>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align={"right"}>Username</TableCell>
                            <TableCell align={"right"}>Email</TableCell>
                            <TableCell align={"right"}>Website</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {list.map(elem =>
                            <TableRow hover  key={elem.id} onDoubleClick={()=>{this.openPopup(elem)}}>
                                <TableCell component="th" scope="row">
                                    {elem.name}
                                </TableCell>
                                <TableCell align="right">{elem.username}</TableCell>
                                <TableCell align="right">{elem.email}</TableCell>
                                <TableCell align="right">{elem.website}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <Popup visible={popup.visible} user={popup.user} close={()=>{this.setState({popup: {visible: false}})}}/>
            </Grid>

        );
    };
}

export default UsersTable;
