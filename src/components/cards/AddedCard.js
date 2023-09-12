import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function AddedCard({id, title, description, posterURL, rating}) {

  const Navigate = useNavigate()
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL} onClick={() => Navigate(`/movie/${id}`)} style={{cursor:'pointer'}}/>
      <Card.Body>
        <Card.Title onClick={() => Navigate(`/movie/${id}`)} style={{cursor:'pointer'}}>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{rating}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AddedCard;