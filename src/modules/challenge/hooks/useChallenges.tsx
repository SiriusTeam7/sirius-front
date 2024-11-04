import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const fetchData = async () => {
    const { data } = await axios.get('');
    return data;
};

const useChallenges = () =>  {

    
}
