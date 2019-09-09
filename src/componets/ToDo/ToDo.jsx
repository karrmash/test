import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, ListItemText, Checkbox, Grid, Typography, Button} from '@material-ui/core';

/**
 * Туду лист по конкретному user
 */
class ToDo extends Component {

    static propTypes = {
        todo:PropTypes.array,
    };

    static defaultProps = {
        todo: []
    };

    state = {
        filter: 'all' // all - Все, run - в работе, finish - завершены
    };

    /**
     * Изменяем фильтр.
     * all - Все, run - в работе, finish - завершены
     * @param filter
     */
    setFilter(filter) {
        this.setState({
            filter : filter
        });
    }

    /**
     * Фильтруем список, в зависимости, какой выбран фильтр - Все, в работе, завершено
     * @returns {*}
     */
    listFilter() {
        const {filter} = this.state;
        const {todo} = this.props;
        switch (filter) {
            case 'run':
                return todo.filter(elem => !elem.completed);
                break;
            case 'finish':
                return todo.filter(elem => elem.completed);
                break;
            default:
                return todo;

        }
    }

    render () {
        const {filter} = this.state;
        const {todo} = this.props;

        const list = this.listFilter();

        return <Grid container style={{padding:10, height:'100%'}} >
            <Grid
                container
                direction={'row'}
                justify={'space-evenly'}
                style={{marginBottom:10}}
            >
                <Button variant="outlined" color = {filter === 'all' ?  'primary': 'default'} onClick={()=>{this.setFilter('all')}}>
                    Всего - {todo.length}
                </Button>
                <Button variant="outlined" color = {filter === 'run' ?  'primary': 'default'} onClick={()=>{this.setFilter('run')}}>
                    В работе - {todo.filter(elem => !elem.completed).length}
                </Button>
                <Button variant="outlined" color = {filter === 'finish' ?  'primary': 'default'} onClick={()=>{this.setFilter('finish')}}>
                    Завершено - {todo.filter(elem => elem.completed).length}
                </Button>

            </Grid>

            {list.length !== 0
                ?  <List style={{height:380, overflowY:'scroll', width:'100%'}}>
                    {list.map(elem =>
                        <ListItem key={elem.id} dense button >
                            <Checkbox tabIndex={-1} disableRipple checked={elem.completed}/>
                            <ListItemText primary={elem.title} style ={elem.completed ? {textDecoration:'line-through'} : {}} />
                        </ListItem>
                    )}

                </List>
                : <Grid container style={{height:100}}>
                    <Typography component="div" variant="h5" style={{marginBottom:10}}>Данные отсутсвуют</Typography>
                </Grid>
            }

        </Grid>
    }
}

export default ToDo;