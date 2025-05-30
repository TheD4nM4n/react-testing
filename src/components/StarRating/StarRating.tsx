import { Stack } from 'react-bootstrap';
import styles from './StarRating.module.css';

function StarRating(){
    let numberOfStars=5
    return <Stack className='wrapper'>
        {console.log(numberOfStars)}
    </Stack>
}

export default StarRating;