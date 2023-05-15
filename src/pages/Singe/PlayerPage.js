import React from 'react';
import { useSelector } from 'react-redux';
import './../Singe/Player.css';
import Navbar from './../../components/Navbar/Navbar'


function PlayerPage() {
    const singleItem = useSelector((state) => state.playerSlice);

    const info = [singleItem.item.year, singleItem.item.category, singleItem.item.rating];
    const url = 'https://joy1.videvo.net/videvo_files/video/free/2012-08/large_watermarked/AnalogStatic-H264%2075_preview.mp4'

    return (
        <>  
            <Navbar/>
            <section className='single-page'>
                <img className='single__cover' src={singleItem.item.thumbnail} alt="" />
                <div className='single__info'>
                    <h1 className='single__title'>{singleItem.item.title}</h1>
                    <ul className='single__info-list'>
                        {info.map((item, index) => <li key={index} className='single__info-list_item'>{item}</li>)}
                    </ul>
                    <video className='single__video' controls>
                        <source src={url} type="video/mp4"/>
                    </video>
                    <div className='single-page__description'>
                        
                    <h2>What is Lorem Ipsum?</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PlayerPage;