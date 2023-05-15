import React from "react";
import '../Home/Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import { useSelector } from 'react-redux';
import Tranding from "../../components/Tranding/Tranding";
import sad from "./../../assets/sad.svg";

function Home() {
	const data = useSelector((state) => state.bookmarkedSlice.DATA);
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
					<Search placeholder={"Search for movies or TV series"} />
					{searchValue && <span className='search-result show'>Found {itemsCount} results for "{searchValue}"</span>}
					{!searchValue && <Tranding  data={data}/>}
					{!searchValue && <h2 className="recomended__title heading">Recommended for you</h2>}
					<ul className="wrapper" ref={wrap}>

						{data.filter((item) => {
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
							/>)}
					</ul>
				</div>
			</section>
		</>
	);
}

export default Home;