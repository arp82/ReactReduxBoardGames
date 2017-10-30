import React from 'react';
import {Sparklines, SparklinesBars} from 'react-sparklines';

export default (props) => {
    return (
        <Sparklines height={140} width={200} data={props.values}>
            <SparklinesBars style={props.style}/>
        </Sparklines>
    );
}