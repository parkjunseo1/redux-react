import React from 'react';
import Counter from './Counter';
import PropsTypes from 'prop-types';

import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor})=>{
    const counterList = counters.map(
        (counter, i) => (
            <Counter key={i} index={i} {...counter} onIncrement={onIncrement} onDecrement={onDecrement} onSetColor={onSetColor}/>
        )
    );

    return(
        <div className="CounterList">
            {counterList}
        </div>
    );
};

CounterList.propsTypes={
    counters: PropsTypes.arrayOf(PropsTypes.shape({color: PropsTypes.string, number:
    PropsTypes.number})),
    onIncrement: PropsTypes.func,
    onDecrement: PropsTypes.func,
    onSetColor: PropsTypes.func
};
CounterList.defaultProps={
    counters:[]
}




export default CounterList;