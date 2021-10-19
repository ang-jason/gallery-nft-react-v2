WatchlistCard Example:
Used with random picture api.
```jsx
const item={
        id:'itemId',
        asset:{
            key:'exampleKey',
            name:'Name of Picture',
            id:'exampleId',
            image_url:'https://picsum.photos/500',
            permalink:'https://picsum.photos/500',
            description:'This is the description of the picture'
    },
    }
const removewatchList = (object)=>  {
    console.log(object)
}

const findItemwatchList =  (object) => {
    console.log(object)
}


     <div className="grid grid-cols-2 ">

<WatchlistCard 
                key='itemId'
                item={item} findItemwatchList={()=> findItemwatchList(item)} 
                handleRemoveListClick={()=>removewatchList(item)}
                />
</div>
```