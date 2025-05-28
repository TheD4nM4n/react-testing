import styles from './RCG.module.css'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

function RCG(){

    return (
        <div className={styles.wrapper}>
            <Stack style={{justifyContent: 'center'}}>
                <Stack direction='row' spacing={2}>
                    <Button variant='outlined' className={styles.button}>Create Hex Color</Button>
                    <Button variant='outlined' className={styles.button}>Create RGB Color</Button>
                    <Button variant='outlined' className={styles.button}>Generate Random Color</Button>
                </Stack>
                <h1 className={styles.content}>HEX Color</h1>
                <h2 className={styles.content}> Color </h2>
            </Stack>
        </div>
    )
}

export default RCG;