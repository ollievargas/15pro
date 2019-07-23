import React from 'react';
import {AppContext} from '../App/Provider';


export default function ({firstVisit}) {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ? <div>
                    Select Currency.{' '}
                </div> : null
            }
        </AppContext.Consumer>
    );
};