Card Example:
Used with random picture api.
```jsx
const asset={
        asset:{
            key:'exampleKey',
            name:'Name of Picture',
            id:'exampleId',
            image_url:'https://picsum.photos/500',
            permalink:'https://picsum.photos/500',
            description:'This is the description of the picture',
            collection:{
                name:'Collection Name',
                discord_url:'https://picsum.photos/500',
                external_url:'https://picsum.photos/500'
                }
    
    }
 
    }
const watchlist = null
const removewatchList = (object)=>  {
    console.log(object)
}
const addwatchList = (object) =>  {
    console.log(object)
}
const findItemwatchList =  (object) => {
    console.log(object)
}


     <div className="grid grid-cols-2 ">
<Card 
                    key='assetIdIsHere1' 
                    asset={asset} 
                    watchlist={watchlist}
                    handleRemoveListClick={()=>removewatchList(asset)}
                    handleWatchListClick={()=>{
                        addwatchList(asset)  
                    }}
                    handlefindItem={findItemwatchList(asset)}

                     />
<Card 
                    key='assetIdIsHere2' 
                    asset={asset}
                    watchlist={watchlist}
                    handleRemoveListClick={()=>removewatchList(asset)}
                    handleWatchListClick={()=>{
                        addwatchList(asset)  
                    }}
                    handlefindItem={findItemwatchList(asset)}

                     />
</div>
```