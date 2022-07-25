import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getSongs } from '../../store/songs';
import EditSongModal from '../EditSongModal';

function Songs() {

    const songs = useSelector(state => state?.songs);
    const dispatch = useDispatch();
    const history = useHistory();
    const songsArr = Object.values(songs);

    useEffect(() => {
        dispatch(getSongs());
    }, [dispatch]);

    return (
        <div>
            <NavLink to='/add-song' >Add Song</NavLink>
            <ul>
                {songsArr.map(song => (
                    <li key={song.id}>
                        <EditSongModal songId={song?.id} onClick={console.log('click!')}/>
                        <p>{song?.name}</p>
                        <p>{song?.artist}</p>
                        <p>{song?.album}</p>
                        <p>{song?.genre}</p>
                        <p>{song?.source}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Songs;
