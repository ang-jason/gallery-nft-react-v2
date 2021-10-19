/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import RemoveListBanner from 'components/removelistbanner'
import { Badge } from 'components/badge'
import { ChatAltIcon } from '@heroicons/react/outline'
import { CollectionIcon } from '@heroicons/react/outline'
import { Button } from 'components/button'


export function WatchlistCard({item,handleRemoveListClick, findItemwatchList}) {

    console.log('item',item.asset.collection)
    const { name:collectionName, discord_url:collectionDiscordurl, external_url:collectionUrl} = item.asset.collection

    const handleWatchlistCardClick = () => {
        const inSide = findItemwatchList
        // console.log('inSide @ CardClick',inSide)
        if (inSide)
        {
            handleRemoveListClick()
        }
    }


    return (
        <div className="p-3">
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-1">
                <img className="w-full" src={item.asset.image_url} alt="Sunset in the mountains"/>
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-1 flex justify-center justify-items-center justify-self-center items-center">{item.asset.name}</div>
                {/* <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil. HERE
                </p> */}
                </div>
                <div>
                <div className="pt-1 flex justify-center justify-items-center justify-self-center items-center">
                <div className="flex gap-3">
                <Badge
                color="green"
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                render={(bProps) => <a {...bProps} href={item.asset.permalink} />}
                >
                {item.id}
                </Badge>


                <Badge color="purple" 
                onClick={()=> handleWatchlistCardClick()}>
                <RemoveListBanner/>

                </Badge>
                </div>
                </div>

                <div className="pb-5">
                <div className="flex justify-center justify-items-center justify-self-center items-center gap-3">

                    <div className="pt-4 pb-1 text-purple-600 flex space-x-3" >
                    <Button
                    variant="plain"
                    render={(btnProps) => <a {...btnProps} href={collectionUrl} />}
                    >
                        <div className="flex gap-2 content-center items-center">
                        <CollectionIcon className="h-6 w-6"/>
                        <div className="font-medium">{collectionName}</div>
                        </div>
                    </Button>
                    <Badge
                    color="gray"
                    // eslint-disable-next-line jsx-a11y/anchor-has-content
                    render={(bProps) => <a {...bProps} href={collectionDiscordurl} />}
                    >
                    <ChatAltIcon className="h-6 w-6"/>
                    </Badge>
                    </div>
                </div>  
                </div>  



                </div>  

                </div>
        </div>
    )
}
