import React, {useEffect} from 'react';
import WatchlistCard from '../components/WatchlistCard';
import {useSelector, useDispatch} from 'react-redux';
import { getWatchList
 } from '../features/watchlist/watchlistSlice';





 const Watchlist = () => {
  const watchlist = useSelector(state => state.watchlist.watchlist)
  const dispatch = useDispatch();
  const user = useSelector((state) => 
  state.auth.user
  )
  
 

  useEffect(()=> {
    if(watchlist.length) return;
    if(user) {
     dispatch(getWatchList());
    }
    
  }, [watchlist])
  
  
  return (
    <div>
        {watchlist.length  ? watchlist.map((movie, i) => (<>
        <WatchlistCard key={movie.id}  movie={movie}  />
        
        </>)) : undefined}
    </div>
  )
}

export default Watchlist;