import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetPlaylists } from "../../store/playlists";
import { getSongs } from "../../store/songs";
import circleLogo from '../assets/earfruit-kiwi-circle-logo.png';
import defaultPlaylistImage from "../assets/my-playlist-img.png";
import {useAudioList} from '../../context/audioList';
import { getUsersThunk } from "../../store/Users";

import './HomePage.css'

function HomePage() {

	const dispatch = useDispatch()

	const {setAudioList, setClearAudioList} = useAudioList();

	const [playlists, setPlaylists] = useState([])
	const [songs, setSongs] = useState([]);





	const playlistSelector = useSelector(state => state.playlists)
	const songSelector = useSelector(state => state.songs)

	const sessionUser = useSelector((state) => state.session.user);


	const rockSongs = songs && songs.filter(song => song.genre === 'Rock')

	const popSongs = songs && songs.filter(song => song.genre === 'Pop')
	const rapSongs = songs && songs.filter(song => song.genre === 'Rap')
	const electronicSongs = songs && songs.filter(song => song.genre === 'Electronic')
	const countrySongs = songs && songs.filter(song => song.genre === 'Country')
	const classicalSongs = songs && songs.filter(song => song.genre === 'Classical')
	const jazzSongs = songs && songs.filter(song => song.genre === 'Jazz')
	const bluesSongs = songs && songs.filter(song => song.genre === 'Blues')
	const metalSongs = songs && songs.filter(song => song.genre === 'Metal')
  const [albumArt, setAlbumArt] = useState('https://protkd.com/wp-content/uploads/2017/04/default-image.jpg');

	useEffect(() => {
		songs.forEach(song => {
      checkImage(song.albumImgUrl)
      if (checkImage(song.albumImgUrl)) setAlbumArt(song.albumImgUrl)
      else setAlbumArt()
    })
	}, [])


	useEffect(() => {
		dispatch(getSongs())
	}, [dispatch])

	useEffect(() => {
		setSongs(Object.values(songSelector))
	}, [songSelector])

	useEffect(() => {
		dispatch(thunkGetPlaylists())
	}, [dispatch])

	useEffect(() => {
		setPlaylists(Object.values(playlistSelector))
	}, [playlistSelector])

	const handlePlaySong = async (value) => {
		setClearAudioList(true);
		setAudioList([]);
		if (value[3]) {
			await setAudioList([
				{
					name: value[0],
					singer: value[1],
					cover: value[3],
					musicSrc: value[2],
				},
			]);
		} else {
			await setAudioList([
				{
					name: value[0],
					singer: value[1],
					cover: circleLogo,
					musicSrc: value[2],
				},
			]);
		}
	};

	function checkImage(url) {
    var image = new Image();
    image.src = url
		return image.width
    }






		return(
			<div>
				{sessionUser ? <h1>Welcome Back {sessionUser && sessionUser.username}!</h1> : <h1>Welcome to EarFruit!</h1>}
				<div className="genre-container" id="generic-playlist-header-container">
						<h3 id="generic-playlist-header">Check Out These Awesome Playlists!</h3>
						<div className='card-containers' id="generic-playlist-container">
						{
							playlists && playlists.map(playlist => (
								<div id="splash-each-playlist-container">
									<NavLink to={`playlists/${playlist.id}`}>
										<div className='song-container'>
											<img className='card-image' id='each-playlist-image' src={playlist.cover_img_url ? playlist.cover_img_url : defaultPlaylistImage} alt={playlist.name}/>
											<p id="playlist-card-name">{playlist.name}</p>
											<p id="playlist-card-description">{playlist.description}</p>
										</div>
									</NavLink>
								</div>
							))
						}
					</div>
				</div>
				<div>
				</div>
				<div>
					<div className="genre-container">
						<h3>Rock</h3>
						<div className='card-containers'>
						{
							rockSongs && rockSongs.map(song => (
								<div className='song-container'>
									<img className='card-image' src={checkImage(song.albumImgUrl) ? song.albumImgUrl : 'https://protkd.com/wp-content/uploads/2017/04/default-image.jpg'} alt={song.name}/>
									<div className="splash-song-info">
										<p>{song.name}</p>
										<p>{song.artist}</p>
									</div>
									<i id="splash-play-button"
						onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="splash-song-button fa-solid fa-play fa-lg"
					/>
								</div>
							))
						}
						</div>
					</div>
				</div>
				<div>
					<div className="genre-container">
						<h3>Pop</h3>
						<div className='card-containers'>
						{
							popSongs && popSongs.map(song => (
								<div className='song-container'>
									<img className='card-image' src={song.albumImgUrl ? song.albumImgUrl : albumArt} alt={song.name}/>
									<div className="splash-song-info">
										<p>{song.name}</p>
										<p>{song.artist}</p>
									</div>
									<i id="splash-play-button"
						onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="splash-song-button fa-solid fa-play fa-lg"
					/>
								</div>
							))
						}
						</div>
					</div>
				</div>
				<div>
					<div className="genre-container">
						<h3>Rap</h3>
						<div className='card-containers'>
						{
							rapSongs && rapSongs.map(song => (
								<div className='song-container'>
									<img className='card-image' src={song.albumImgUrl ? song.albumImgUrl : albumArt} alt={song.name}/>
									<div className="splash-song-info">
										<p>{song.name}</p>
										<p>{song.artist}</p>
									</div>
									<i id="splash-play-button"
						onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="splash-song-button fa-solid fa-play fa-lg"
					/>
								</div>
							))
						}
						</div>
					</div>
				</div>
				<div>
					<div className="genre-container">
						<h3>Electronic</h3>
						<div className='card-containers'>
						{
							electronicSongs && electronicSongs.map(song => (
								<div className='song-container'>
									<img className='card-image' src={song.albumImgUrl ? song.albumImgUrl : albumArt} alt={song.name}/>
									<div className="splash-song-info">
										<p>{song.name}</p>
										<p>{song.artist}</p>
									</div>
									<i id="splash-play-button"
						onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="splash-song-button fa-solid fa-play fa-lg"
					/>
								</div>
							))
						}
						</div>
					</div>
				</div>
				<div>
					<div className="genre-container">
						<h3>Country</h3>
						<div className='card-containers'>
						{
							countrySongs && countrySongs.map(song => (
								<div className='song-container'>
									<img className='card-image' src={song.albumImgUrl ? song.albumImgUrl : albumArt} alt={song.name}/>
									<div className="splash-song-info">
										<p>{song.name}</p>
										<p>{song.artist}</p>
									</div>
									<i id="splash-play-button"
						onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="splash-song-button fa-solid fa-play fa-lg"
					/>
								</div>
							))
						}
						</div>
					</div>
				</div>
				<div>
					<div className="genre-container">
						<h3>Classical</h3>
						<div className='card-containers'>
						{
							classicalSongs && classicalSongs.map(song => (
								<div className='song-container'>
									<img className='card-image' src={song.albumImgUrl ? song.albumImgUrl : albumArt} alt={song.name}/>
									<div className="splash-song-info">
										<p>{song.name}</p>
										<p>{song.artist}</p>
									</div>
									<i id="splash-play-button"
						onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="splash-song-button fa-solid fa-play fa-lg"
					/>
								</div>
							))
						}
						</div>
					</div>
				</div>
				<div>
					<div className="genre-container">
						<h3>Jazz</h3>
						<div className='card-containers'>
						{
							jazzSongs && jazzSongs.map(song => (
								<div className='song-container'>
									<img className='card-image' src={song.albumImgUrl ? song.albumImgUrl : albumArt} alt={song.name}/>
									<div className="splash-song-info">
										<p>{song.name}</p>
										<p>{song.artist}</p>
									</div>
									<i id="splash-play-button"
						onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="splash-song-button fa-solid fa-play fa-lg"
					/>
								</div>
							))
						}
						</div>
					</div>
				</div>
				<div>
					<div className="genre-container">
						<h3>Blues</h3>
						<div className='card-containers'>
						{
							bluesSongs && bluesSongs.map(song => (
								<div className='song-container'>
									<img className='card-image' src={song.albumImgUrl ? song.albumImgUrl : albumArt} alt={song.name}/>
									<div className="splash-song-info">
										<p>{song.name}</p>
										<p>{song.artist}</p>
									</div>
									<i id="splash-play-button"
						onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="splash-song-button fa-solid fa-play fa-lg"
					/>
								</div>
							))
						}
						</div>
					</div>
				</div>
				<div>
					<div className="genre-container">
						<h3>Metal</h3>
						<div className='card-containers'>
						{
							metalSongs && metalSongs.map(song => (
								<div className='song-container'>
									<img className='card-image' src={song.albumImgUrl ? song.albumImgUrl : albumArt} alt={song.name}/>
									<div className="splash-song-info">
										<p>{song.name}</p>
										<p>{song.artist}</p>
									</div>
									<i id="splash-play-button"
						onClick={() =>
							handlePlaySong([
								song.name,
								song.artist,
								song.source,
								song.albumImgUrl,
							])
						}
						class="splash-song-button fa-solid fa-play fa-lg"
					/>
								</div>
							))
						}
						</div>
					</div>
				</div>
			</div>
		)
	}


export default HomePage;
