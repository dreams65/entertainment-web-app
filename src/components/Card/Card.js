import React from 'react';
import '../Card/Card.css';
import playIcon from '../../assets/icon-play.svg';
import { NavLink } from "react-router-dom";
import { ReactComponent as BookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { useDispatch } from 'react-redux';
import { addBookmark } from './../../redux/slices/bookmarkedSlice';
import { showFilmPage } from '../../redux/slices/playerSlice';


function Card({ title, thumbnail, year, rating, category, id, bookmark }) {

	const dispatch = useDispatch()

	function handleBookmarkClick(id) {
		dispatch(addBookmark({ id, isBookmarked: true }));
		if (bookmark === true) {
			dispatch(addBookmark({ id, isBookmarked: false }));
		}
	}

	function handlePlayClick(id) {
		dispatch(showFilmPage({
			title: title, 
			thumbnail: thumbnail, 
			year: year, 
			rating: rating, 
			category : category, 
			id: id,
		}
		))
	}

	return (
		<li className='card'>
			<div className='card__top' style={{ backgroundImage: "url(" + `${thumbnail}` + ")" }}>
				<NavLink className='card__btn-play' onClick={() => handlePlayClick(id)} to="/player">
					<img className='card__btn-play-icon' src={playIcon} alt="play-icon"/>
					Play
				</NavLink>
				<button className='card__btn-bookmark' onClick={() => handleBookmarkClick(id)}>
					<BookmarkEmpty className={bookmark ? "bookmark-icon active" : "bookmark-icon"} />
				</button>
			</div>
			<div className='card__bottom'>
				<div className='card__information'>
					<span className='year'>{year}</span>
					<span className='category'>
						<img className='category__icon' src={`./../assets/icon-category-${(category).toLowerCase().replace(/ /g, '-')}.svg`} alt="category-icon" />
						{category}
					</span>
					<span className='rating'>{rating}</span>
				</div>
				<h3 className='card__title heading-xs'>{title}</h3>
			</div>
		</li>
	);
}

export default Card;