import React, {useEffect} from 'react';
import WatchlistCard from '../components/WatchlistCard';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import { getWatchList
 } from '../features/watchlist/watchlistSlice';
import Spinner from '../components/Spinner';




 const Watchlist = () => {
   const dispatch = useDispatch();
   const user = useSelector((state) => 
   state.auth.user
   )
   
   const watchlist = useSelector((state) => state.watchlist.watchlist, shallowEqual);
    const {isLoading} =  useSelector(state => state.watchlist);
   
   
   
   useEffect(()=> {
    
    if(user) {
     dispatch(getWatchList());
    }

  
    

    
  }, [dispatch, user])
  
  
  return (
    <div>
        {!isLoading ? watchlist.map((movie) => (
        <WatchlistCard removebtn={true} key={movie.id} addedToWatchlist={true} movie={movie}  />
        
        )) : <Spinner/>}
    </div>
  )
}

export default Watchlist;