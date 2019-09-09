import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';
import ToDo from "../ToDo/ToDo";
import {Grid, Typography} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

/**
 * Попап-окно
 */
class Popup extends Component {

    static propTypes = {
        visible:PropTypes.bool,
        user:PropTypes.object,
        close:PropTypes.func,
    };

    static defaultProps = {
        visible: false,
        user:{},
        close: ()=> {},
    };

    render () {
        const todo = window.store.getState().data.todo;
        const {visible, close, user} = this.props;
        return (
            <Modal
                visible={visible}
                width="600"
                height="520"
                effect="fadeInUp"
                onClickAway={() => close()}
            >
                <Grid container direction={'column'} style={{margin:10, flex: 1, width: 'auto'}}>
                    <Grid container direction={'row'} justify={'space-between'} alignItems={'center'} style={{height:48}}>
                        <Typography component="div" variant="h5">ToDo-лист</Typography>
                        <IconButton aria-label="Close" onClick={() => close()}>
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                    <ToDo
                        todo={todo.filter(elem => elem.userId === user.id)}
                    />
                </Grid>

            </Modal>
        )
    }
}

export default Popup;