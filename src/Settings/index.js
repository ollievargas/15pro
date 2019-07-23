import React from 'react';
import Welcome from './Welcome';
import  Button from './Button';
import Page from '../Shared/Page';
import CoinGrid from './CoinGrid';



export default function() {
    return <Page name="settings">
        <Welcome/>
        <CoinGrid topSection />
        <Button/>
        <CoinGrid/> 
        </Page>
}