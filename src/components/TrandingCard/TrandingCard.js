import React from 'react';
import './../TrandingCard/TrandingCard.css';
import './../Card/Card.css'
import { ReactComponent as BookmarkEmpty } from '../../assets/icon-bookmark-empty.svg';
import { NavLink } from 'react-router-dom';
import playIcon from '../../assets/icon-play.svg';
import { useDispatch } from 'react-redux';
import { addBookmark } from './../../redux/slices/bookmarkedSlice';
import { showFilmPage } from '../../redux/slices/playerSlice';

function TrandingCard({title, thumbnail, year, category, rating, bookmark, id}) {

    const dispatch = useDispatch();

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
        <div className="tranding__card" key={title} style={{ backgroundImage: "url(" + `${thumbnail}` + ")" }}>
            <div className="card-info">
                <div className="card-info__wrapper">
                    <span className="year body-m">{year}</span>
                    <span className="category body-m">
                        <img className="category_icon" src={`./../assets/icon-category-${(category).toLowerCase().replace(/ /g, '-')}.svg`} alt="icon" />
                        {category}
                    </span>
                    <span className="rating body-m">{rating}</span>
                </div>
                <h2 className="tranding__card-title">{title}</h2>
                <button className='card__btn-bookmark' onClick={() => handleBookmarkClick(id)}>
					<BookmarkEmpty className={bookmark ? "bookmark-icon active" : "bookmark-icon"} />
				</button>
                <NavLink className='card__btn-play' onClick={() => handlePlayClick(id)} to="/player">
					<img className='card__btn-play-icon' src={playIcon} alt="play-icon"/>
					Play
				</NavLink>
            </div>
        </div>
    );
}

export default TrandingCard;