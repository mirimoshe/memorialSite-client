import React, { useEffect, useState } from 'react'
import '../style/stories.css';
import OneStory from './oneStory';
import { useDispatch, useSelector } from 'react-redux'
import { fetchStory } from '../Story/storySlice';


function AllStories({ deceadid }) {
    const stories = useSelector(state => state.story.stories);
    const status = useSelector(state => state.story.status);
    const response = useSelector(state => state.response.responses)
    const dispatch = useDispatch();

    const [order, setOrder] = useState('');

    useEffect(() => {
        if (status != 'fulfilled') {
            dispatch(fetchStory())
        }
    }, [])



    const handleStoryClick = (e, clickedItem) => {
        // Perform any actions with the clicked item data here
    };

    const responseAmount = (id) => {
        let filter = response.filter(obj => obj.storyId == id);
        return filter.length;
    }

    const filteredStories = stories.filter(obj => obj.deceasdId == deceadid);

    const [sortStories, setsortStories] = useState([]);
    useEffect(() => {
        const sorted = [...filteredStories]
        const sortedArray = sorted.sort((a, b) => {
            const sumA = a.favorite_number + a.empowering_number + a.exciting_number + a.heroism_number + a.thanksgiving_number;
            const sumB = b.favorite_number + b.empowering_number + b.exciting_number + b.heroism_number + b.thanksgiving_number;
            return sumB - sumA;
        });
        setsortStories(sortedArray);
    }, []);


    return (

        <div className='all-stories-container'>
            {filteredStories.length === 0 ? (
                <p id='available'>No stories available </p>
            ) : (
                filteredStories.map((obj) => (
                    <OneStory key={obj.id} item={obj} onStoryClick={handleStoryClick} num={responseAmount(obj.id)} />
                ))
            )}

        </div>
    )
}

export default AllStories