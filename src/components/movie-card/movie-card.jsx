import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export const MovieCard = ({ movie }) => {
	return (
		<Card bg={'light'} border='dark' style={{ width: '18rem' }}>
			<Card.Img variant='top' src={movie.ImagePath} />
			<Card.Body>
				<Card.Title>{movie.Title}</Card.Title>
				<Card.Text>{movie.Description}</Card.Text>
				<Link to={'/movies/' + movie.Title}>
					<Button className='m-2'>See More</Button>
				</Link>
			</Card.Body>
		</Card>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.shape({
		_id: PropTypes.string.isRequired,
		ImagePath: PropTypes.string.isRequired,
		Title: PropTypes.string.isRequired,
		Genre: PropTypes.string.isRequired,
		Description: PropTypes.string.isRequired,
		Director: PropTypes.string.isRequired,
	}).isRequired,
};
