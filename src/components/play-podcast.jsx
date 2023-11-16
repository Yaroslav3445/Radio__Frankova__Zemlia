import React from 'react';
import { useParams } from 'react-router-dom';
import Pagepodcast from '../page/Page-podcast';
import Podcast from '../data/podcast.json';
const Playpodcast = () => {
    const { id } = useParams();
    return (
        <>
                <div>
                    <h1>Деталі елемента {id}</h1>
                    {selectedItem ? (
                        <div>
                            <p>ID: {selectedItem.id}</p>
                            <p>Name: {selectedItem.name}</p>
                        </div>
                    ) : (
                        <p>Елемент з ID {id}</p>
                    )}
                </div>
        </>
    );
};

export default Playpodcast;