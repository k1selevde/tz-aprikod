import React from 'react';
import {ReactComponent as FilterSvg} from '../../static/icons/filter.svg'
import {observer} from "mobx-react";

import './Filter.scss'



@observer
class Filter extends React.Component {
    constructor() {
        super();
        this.filterUnfulfilled = this.filterUnfulfilled.bind(this)
    }

    filterUnfulfilled() {
        this.props.todoStore.setShowUnfulfilled()
    }

    render() {
        return (
            <div className="filter__wrap">
                <FilterSvg />
                <p className="filter__text">Показать невыполненные</p>
                <input
                    type="checkbox"
                    className="filter__checkbox"
                    checked={this.props.todoStore.showUnfulfilled}
                    onChange={this.filterUnfulfilled}
                />
            </div>
        )
    }
}

export default Filter;
