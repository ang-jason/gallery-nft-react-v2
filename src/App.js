import './App.css';
import './index.css'
import React, {useState , useEffect} from 'react'
import { useQuery } from 'react-query'
import Navbar from './pages/navbar';
import Gallery from './pages/gallery';
import Watchlist from './pages/watchlist';


export const GalleryContext=React.createContext()

const apiKey = process.env.REACT_APP_NOT_SECRET_CODE

const fetchGallery = async (key,pagination) => {
  // const pagination = (key.next === undefined) ? null : key.next
  // console.log('pagenation', pagination)


  // const pagination = (key.queryKey[1] === undefined) ? null : key

  // console.log('pagenation33', pagination)
  // console.log('key', key)

  const options = {
    method: 'GET',
    headers: {Accept: 'application/json', 'X-API-KEY': apiKey}
  };

  // const res = await fetch(`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20`, options)
  // const res = await fetch(`https://api.opensea.io/api/v1/events?only_opensea=false&offset=${pagination}&limit=18`, options)
  // const res = await fetch(`https://api.opensea.io/api/v1/events?cursor=${pagination}`, options)


  const url = pagination ? `https://api.opensea.io/api/v1/events?cursor=${pagination}` : `https://api.opensea.io/api/v1/events?`
  console.log('url',url)
  const res = await fetch(url, options)

  // const res = await fetch(`https://api.opensea.io/api/v1/events?only_opensea=false&offset=0&limit=20`,options)

  // const res = await fetch('http://swapi.dev/api/planets/')
  // only proceed once promise is resolved
  let data = await res.json();
  // only proceed once second promise is resolved
  console.log("data",data)
  return data;
}

const LOCALSTORAGEKEY = 'react-nft-gallery'

function App() {
  
  const [page, setPage] = useState('gallery')

  const [pagination, setPagination] = useState(null)

  // console.log('pagination',pagination)
  const { data, status} = useQuery(['gallery',pagination], fetchGallery,{
    staleTime:30000,
    onSuccess: () => console.log('data fetched')
  })
  // console.log(data)

  const [watchList, setwatchList] = useState('[]')


  const nextPagination = () =>{

    console.log('nexttt', data.next);
    setPagination(data.next)
  }

  const prevPagination = () =>{
    // console.log('prev', pagination)
    console.log('prevv', data.previous);
    // if (pagination != null ){
    //   setPagination(data.previous)
    // }
    setPagination(data.previous)
  }


  const saveToLocalStorage = (assets) =>
  {
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(assets))
  }
  const getFromLocalStorage = (assets) =>
  {
    const storageWatchList = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY))
    // console.log(storageWatchList)
    setwatchList(storageWatchList)
  }


  const findItemwatchList = (asset) =>{
    // console.log('asset',asset)
    console.log('findItemwatchList',asset.asset.id)
    // console.log('watchList',watchList)
    if (watchList !== null)
    {
      const isInside = watchList.find(item => item.asset.id === asset.asset.id)
      // console.log('ininSide',isInside)
      return isInside ? true : false
    }else{
      return false
    }
    // const isInside = watchList.some(item => item.asset.id === asset.asset.id)
    // console.log('isInside',isInside)
    // console.log('findItemwatchList',isInside ? true : false)
    // if (isInside == null)
    // {
    //   return false
    // }
    // return isInside ? true : false
  }


  const addwatchList = (asset) => {
      console.log("adding!! @ addwatchList",asset.asset.id)
      const isInside = findItemwatchList(asset)
      // console.log('isInside',isInside)
      // if (!isInside || isInside == null ){
      // console.log("added!! @ addwatchList",watchList)
      console.log()
      if (!isInside){
        if (watchList == null){
          const newWatchList = [asset]
          setwatchList(newWatchList)
          saveToLocalStorage(newWatchList)
          // console.log(newWatchList)
        }else{
          const newWatchList = [asset, ...watchList]
          setwatchList(newWatchList)
          saveToLocalStorage(newWatchList)
          // console.log(newWatchList)
        }
  
      }

      // }
  }

  const removewatchList = (asset) =>{
      console.log("removing")
      const newWatchList = watchList.filter((item)=> item.id !== asset.id )
      if (newWatchList == null)
      {
        return
      }
      setwatchList(newWatchList)
      saveToLocalStorage(newWatchList);
  }

  useEffect(() => {
    getFromLocalStorage()
    // for development work
    // localStorage.clear()
  }, [])



  const galleryContextValue={
    // key:value same text, just specific once
    addwatchList,
    removewatchList,
    findItemwatchList,
    nextPagination,
    prevPagination
  }



  return (

    <div>
    <GalleryContext.Provider value={galleryContextValue}>
      <Navbar setPage={setPage}/>
      { page === 'gallery' ? <Gallery data={data} status={status} watchlist={watchList}/> : <Watchlist watchList={watchList}/>
      }
    </GalleryContext.Provider>
    </div>

  );
}

export default App;
