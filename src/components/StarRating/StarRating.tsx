import { Stack } from '@mui/material';
import styles from './StarRating.module.css';
import { StarRate } from '@mui/icons-material';
import { useState } from 'react';
import { pink } from '@mui/material/colors';

function StarRating({numberOfStars=5}){
    {console.log(numberOfStars)}
    {console.log()}
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex: number){
        console.log(getCurrentIndex);
        setRating(getCurrentIndex);
    }
    function handleMouseMove(getCurrentIndex:number){
        console.log('mouseMove' + getCurrentIndex)
        setHover(getCurrentIndex);
    }
    function handleMouseLeave(getCurrentIndex:number){
        console.log('mouseLeave' + getCurrentIndex)
        setHover(rating);
    }
    return <Stack direction='row' spacing={3} className={styles.wrapper}>
        {
        [...Array(numberOfStars)].map((_, index) => {
            index += 1
            return <StarRate
            key={index}
            className={index<=(hover|| rating) ? styles.active : styles.inactive}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            sx={{fontSize:40}}
            style={{WebkitTextStroke: '8px pink'}}
            />
        })
        }
    </Stack>
}

export default StarRating;