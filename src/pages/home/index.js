import React, { Component } from 'react'
import Header from "@components/header"
import {Page} from "@common/commonStyled"
import  NineWrap from "@components/nineWrap"
export default class Home extends Component {
    render() {
        return (
            <Page>
                <Header/>
                <NineWrap/>
            </Page>
        )
    } 
}
