import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, Grid, Button } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FilterField from "./FilterField/FilterField";

/**
 * Компонент фильтрации списка users
 */
class Filter extends Component{

    static propTypes = {
        isFilter: PropTypes.bool,
        data:PropTypes.object,
        field:PropTypes.array,
        saveFilter:PropTypes.func,
    };

    static defaultProps = {
        isFilter: false,
        data: {},
        field: [],
        saveFilter: ()=>{},
    };

    state = {
        data: this.props.data,
    };

    /**
     * Применение или сброс фильтра.
     * Если clear = false, то Применение, иначе - Сброс.
     * @param clear
     */
    saveFilter (clear = false) {

        let {isFilter, data} = this.state;
        const {saveFilter} = this.props;

        if (clear) {
                isFilter = false;
                data={};
        } else {
            for (let key in data) {
                if (data[key]) {
                    isFilter = true;
                    break;
                }
            }
        }

        this.setState({isFilter, data});
        saveFilter(isFilter, data);


    }

    render () {
        const {data} = this.state;
        const {isFilter, field} = this.props;
        return(
            <ExpansionPanel style={isFilter ? {marginBottom:10, backgroundColor:'#e0e0e0'} : {marginBottom:10}}>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <FilterListIcon/>
                    <Typography style={{marginLeft:10}}>Фильтр</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                    >

                        {field.map(elem =>
                            <FilterField
                                key={elem.field}
                                field= {elem.field}
                                label= {elem.label}
                                placeholder= {elem.placeholder}
                                value={data[elem.field] ? data[elem.field]: ''}
                                onChange={(value)=>{
                                    data[elem.field] = value;
                                    this.setState({data});
                                }}
                            />
                        )}

                        <Grid
                            container
                            justify="flex-end"
                            style={{marginTop:10}}
                        >
                            <Button onClick={()=>{this.saveFilter(false)}} variant="contained" color="primary" style={{marginRight:10}}>
                                Применить
                            </Button>
                            <Button onClick={()=>{this.saveFilter(true)}} variant="contained">
                                Сбросить
                            </Button>
                        </Grid>
                    </Grid>

                </ExpansionPanelDetails>

            </ExpansionPanel>
        );
    };
}

export default Filter;
