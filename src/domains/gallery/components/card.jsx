/* eslint-disable no-useless-rename */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useState} from 'react'
import RemoveListBanner from 'components/removelistbanner'
import AddListBanner from 'components/addlistbanner'
import { Badge } from 'components/badge'
import { ChatAltIcon } from '@heroicons/react/outline'
import { CollectionIcon } from '@heroicons/react/outline'
import { Button } from 'components/button'

export function Card(props) {
    // console.log(props)
    // console.log(props.watchlist)
    const watchlistAsset = props.watchlist
    // console.log(watchlistAsset)
    const { image_url:image_url, name, id, permalink, description } = props.asset.asset
    // console.log(image_url)
    const { name:collectionName, discord_url:collectionDiscordurl, external_url:collectionUrl} = props.asset.asset.collection
    // const ownership  = (props.asset.creator.user.username) ? (props.asset.creator.user.username) :(props.asset.owner.user.username)
    // const {ownership}  = (props.asset.asset.owner.user)
    // console.log(discord_url)
    // console.log(props.asset.asset.collection.discord_url)
    // console.log(props.asset.asset.collection.name)

    let filteredWatchlist = watchlistAsset.filter(item =>

        // item.asset.id === props.asset.asset.id
        // console.log('item.ass.id',item.asset.id)
        (item.asset.id === props.asset.asset.id)
    )
    console.log('filter',filteredWatchlist.length>0)
    // console.log('props',props.asset.asset.id)


    const [yesToggle, setyesToggle] = useState(filteredWatchlist.length>0 || false)


    const handleCardClick = () => {
        // const inSide = props.handlefindItem()

        const inSide = props.handlefindItem()
        console.log('inSide @ CardClick',inSide)
        if (inSide)
        {
            // inside
            console.log('yesToggle',yesToggle)
            setyesToggle(false)
            props.handleRemoveListClick()  
                // props.handleAddListClick()
        }else{
            //not inside
            console.log('yesToggle',yesToggle)
            setyesToggle(true)
            props.handleAddListClick()
            
            // props.handleRemoveListClick()   
        }
    }


    const tempImg = "https://picsum.photos/id/237/500/500"

    return (
        <div className="">
        <div className="rounded overflow-hidden shadow-lg m-5">
        <img className="w-full h-80 transform hover:scale-150 transition duration 150" src={image_url || tempImg} alt={name}/>
        {/* <div className="transform hover:scale-105 text-black  ">{description}</div> */}
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>

            <p className="text-gray-700 text-base">
                        {description}
            </p>

            <div className="pt-5 text-purple-600 flex space-x-3" >
                    <Button
                    variant="plain"
                    render={(btnProps) => <a {...btnProps} href={collectionUrl} />}
                    >
                        <div className="flex gap-2 content-center items-center">
                        <CollectionIcon className="h-6 w-6"/>
                        <div className="font-semibold"> {collectionName}</div>
                        </div>
                    </Button>
            </div>
      
        </div>
            <div className="px-6 pb-5">
        
                <div className="flex gap-3 m-1">

    
                    <Badge
                    color="green"
                    // eslint-disable-next-line jsx-a11y/anchor-has-content
                    render={(bProps) => <a {...bProps} href={permalink} />}
                    >
                    {id}
                    </Badge>

                    <Badge
                    color="gray"
                    // eslint-disable-next-line jsx-a11y/anchor-has-content
                    render={(bProps) => <a {...bProps} href={collectionDiscordurl} />}
                    >
                    <ChatAltIcon className="h-6 w-6"/>
                    </Badge>
                    
                <Badge color="yellow" onClick={()=>handleCardClick()}>

                {/* {(yesToggle)? <RemoveListBanner inNotInside={inNotInside} />:<AddListBanner/> }
                </Badge> */}

                {(yesToggle)? <RemoveListBanner />:<AddListBanner/> }
                </Badge>

                </div>
            </div>
        </div>
        </div>
        
        )
}
