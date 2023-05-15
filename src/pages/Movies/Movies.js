import React from "react";
import '../Movies/Movies.css';
import Navbar from '../../components/Navbar/Navbar';
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";


function Movies() {
	const data = useSelector((state) => state.bookmarkedSlice.DATA);
	const movies = data.filter(item => item.category === "Movie");
	const searchValue = useSelector((state) => state.searchSlice.value);
	const [itemsCount, setItemsCount] = React.useState(0);
	const wrap = React.useRef(null);
	React.useEffect(() => {
		setItemsCount(wrap.current.childElementCount);
	}, [searchValue])


	return (
		<>
			<Navbar />
			<section className="home">
				<div className="container">
					<Search placeholder={"Search for movies"} />
					{searchValue && <span className='search-result show'>Found {itemsCount} results for "{searchValue}"</span>}
					{!searchValue && <h2 className="movies__title heading">Movies</h2>}
					<ul className="wrapper" ref={wrap}>
					{movies.filter((item) => {
							if (searchValue == '') {
								return item
							} else if (item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) {
								return item
							}
						}).map((item) =>
							<Card
								key={item.id}
								id={item.id}
								title={item.title}
								thumbnail={item.thumbnail.regular.medium}
								year={item.year}
								rating={item.rating}
								category={item.category}
								bookmark={item.isBookmarked}
							/>
						)}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Movies;