import React from 'react'
export const ItemPreviewContext = React.createContext();

const initialState = {
    imageurl: 'http://via.placeholder.com/350x250?text=Please select an image',
    itemowner: {},
    created: new Date(),
    title: 'Title preview',
    description: 'Description preview',
    tags: [],
}
const ItemPreviewProvider = (props) => {
    //React hook item uses setItem to update it's state
    const [item, setItem] = React.useState(initialState);
    const updatePreview = (itemInput) => {
        const newItem = { ...item, ...itemInput }
        setItem(newItem)
    }
    const resetPreview = () => {
        setItem(initialState);
    }
    // console.log(item)
    return (
        <ItemPreviewContext.Provider
            value={{
                state: item,
                resetPreview: resetPreview,
                updatePreview: updatePreview
            }}>
            {props.children}
        </ItemPreviewContext.Provider>
    )
}

export default ItemPreviewProvider;