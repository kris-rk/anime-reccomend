//the card that is used for the website
import React from 'react';

function Template({anime}) {
	
	return (
		<article className="card">
			<a 
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.images.jpg.image_url} 
						alt = "image here"
						/>
				</figure>
				<h3>{ anime.title }</h3>
				<a  
				
				className = "list-text" 
				href = "">add to list</a>
			</a>
		</article>
	)
    }

export default Template;