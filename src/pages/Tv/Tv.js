import React, { useEffect } from "react";
import '../Tv/Tv.css';
import Navbar from '../../components/Navbar/Navbar';
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";

function Tv() {
	const searchValue = useSelector((state) => state.searchSlice.value);
	const data = useSelector((state) => state.bookmarkedSlice.DATA);
	const tvSeries = data.filter(item => item.category === "TV Series");
	const [itemsCount, setItemsCount] = React.useState(0);
	const wrap = React.useRef(null);
	
	React.useEffect(() => {
		setItemsCount(wrap.current.childElementCount);
	}, [searchValue])

	return (
		<>
			<Navbar />
			<section className="tv">
				<div className="container">
					<Search placeholder={"Search for TV series"} />
					{searchValue && <span className='search-result show'>Found {itemsCount} results for "{searchValue}"</span>}
					{!searchValue && <h2 className="tv__title heading">TV Series</h2>}
					<ul className="wrapper" ref={wrap}>
						{tvSeries.filter((item) => {
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

export default Tv;