import { API_BASE_URL} from '../constants';

export function getSummary(){
    // return fetch(
    //     `API_BASE_URL`+`/summary`
    // ).then(
    //     response => response.json()
    // ).then((result) => {
    //     console.log('Success:', result);
    // }).catch((error) => {
    //     console.error('Error:', error);
    // });
    console.log(API_BASE_URL+"/summary")
    return (
        fetch(API_BASE_URL+"/summary")
    );
}