import React from 'react'
import ItemCard from '../ItemCard'
import { ItemPreviewContext } from '../../context/ItemPreviewProvider'

const ShareItemPreview = ({ classes }) => {
    return (
        <ItemPreviewContext.Consumer>
            {({ state }) => {
                return (
                    <div>
                        <ItemCard item={state} />
                    </div>
                )
            }}
        </ItemPreviewContext.Consumer>
    )
}

export default ShareItemPreview;