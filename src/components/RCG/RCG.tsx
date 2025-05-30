import styles from './RCG.module.css'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { backdropClasses, hexToRgb, rgbToHex } from '@mui/material';
import { useState } from 'react';

function RCG(){

    // let BackgroundColor = 'lavender';
    // let hexColor = '';
    // let rgbColor = '';

    const [backgroundColor, setBackgroundColor] = useState('lavender');
    const [hexColor, setHexColor] = useState('');
    const [rgbColor, setRGBColor] = useState('');
    const [hexVisible, setHexVisible] = useState('visible');
    const [rgbVisible, setRGBVisible] = useState('visible')
    function GenerateHex() {
        const hlength = 6;
        const hex = '0123456789ABCDEF';
        let output = '#';
        for (let i=0; i<hlength; i++){
            output += hex.charAt(Math.floor(Math.random()*hex.length));
        }
        setBackgroundColor(output);
        setHexColor(backgroundColor);
        setRGBColor(hexToRgb(backgroundColor));
        setRGBVisible('hidden');
        setHexVisible('visible')
        // return hexColor;
    }
    function CreateRGB(){
        GenerateHex();
        setRGBVisible('visible');
        setHexVisible('hidden');
        // return rgbColor;
    }
    return (
        <div className={styles.wrapper} style={{backgroundColor: backgroundColor}}>
            <Stack style={{justifyContent: 'center'}}>
                <Stack direction='row' spacing={2}>
                    <Button variant='contained' className={styles.button} onClick={() => GenerateHex()}>Create Hex Color</Button>
                    <Button variant='contained' className={styles.button} onClick={() => CreateRGB()}>Create RGB Color</Button>
                    <Button variant='contained' className={styles.button}>Generate Random Color</Button>
                </Stack>
                <h1 className={styles.content} style={{visibility: hexVisible}}>HEX Color: {hexColor}</h1>
                <h2 className={styles.content} style={{visibility: rgbVisible}}>RGB Color: {rgbColor}</h2>
            </Stack>
        </div>
    )
}

export default RCG;