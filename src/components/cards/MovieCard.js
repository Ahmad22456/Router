import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function MovieCard({id, title, description, posterURL, rating, add}) {

  const Navigate = useNavigate()

  const handleClick = (e) => {
    add(title)
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL} onClick={() => Navigate(`/movie/${id}`)} style={{cursor:'pointer'}}/>
      <Card.Body>
        <Card.Title onClick={() => Navigate(`/movie/${id}`)} style={{cursor:'pointer'}}>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Rating: {rating}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={(e) => {handleClick(e)}}>Add Movie</Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;