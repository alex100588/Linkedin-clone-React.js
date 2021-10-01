import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle)=>(
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets__header'>
                <h2>Linkedin News</h2>
                <InfoIcon />
            </div>
            {newsArticle('react is back', 'top news -9087 readers')}
            {newsArticle('Javascript', 'frontEnd -9087 readers')}
            {newsArticle('Html', 'used for every website -9087 readers')}
            {newsArticle('CSS', 'gives styles -9087 readers')}
            {newsArticle('web design', 'frontEnd -9087 readers')}
        </div>
    )
}

export default Widgets
