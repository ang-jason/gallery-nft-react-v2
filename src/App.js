import './App.css';
import './index.css'
import React, {useState , useEffect} from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from './pages/navbar';
import Gallery from './pages/gallery';
import Watchlist from './pages/watchlist';



export const GalleryContext = React.createContext();

const LOCALSTORAGEKEY = "react-nft-gallery";
const queryClient = new QueryClient();

function App() {
  const [page, setPage] = useState("gallery");

  const [watchList, setwatchList] = useState("[]");

  const saveToLocalStorage = (assets) => {
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(assets));
  };

  const getFromLocalStorage = (assets) => {
    const storageWatchList = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY));
    setwatchList(storageWatchList);
  };

  const findItemwatchList = (asset) => {
    if (watchList !== null) {
      const isInside = watchList.find(
        (item) => item.asset.id === asset.asset.id
      );
      return isInside ? true : false;
    } else {
      return false;
    }
  };

  const addwatchList = (asset) => {
    const isInside = findItemwatchList(asset);
    if (!isInside) {
      if (watchList == null) {
        const newWatchList = [asset];
        setwatchList(newWatchList);
        saveToLocalStorage(newWatchList);
      } else {
        const newWatchList = [asset, ...watchList];
        setwatchList(newWatchList);
        saveToLocalStorage(newWatchList);
      }
    }
  };

  const removewatchList = (asset) => {
    const newWatchList = watchList.filter((item) => item.id !== asset.id);
    if (newWatchList == null) {
      return;
    }
    setwatchList(newWatchList);
    saveToLocalStorage(newWatchList);
  };

  useEffect(() => {
    getFromLocalStorage();
    // for development work
    // localStorage.clear()
  }, []);

  const galleryContextValue = {
    // key:value same text, just specific once
    addwatchList,
    removewatchList,
    findItemwatchList,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <GalleryContext.Provider value={galleryContextValue}>
          <Navbar setPage={setPage} />
          {page === "gallery" ? (
            <Gallery watchlist={watchList} />
          ) : (
            <Watchlist watchList={watchList} />
          )}
        </GalleryContext.Provider>
      </div>
    </QueryClientProvider>
  );
}

export default App;
