import { useEffect} from 'react';
import axios from 'axios';

export default function Classes (props) {
    useEffect(() => {
        const getClasses = () => {
            axios
            .get('https://ft-anywherefitness-7.herokuapp.com//api/classes')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })
        }
        getClasses();
    }, [])
    return(
        <div></div>
    );
}