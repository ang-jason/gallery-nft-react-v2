import React from 'react'
import { HeartIcon } from '@heroicons/react/outline'


export default function AddListBanner() {
    return (
        <button className="flex items-center justify-around content-center ">
            <span className="font-semibold">Stash it!</span>
            <HeartIcon className="h-5 w-5 text-pink-500"/>
        </button>
    )
}
