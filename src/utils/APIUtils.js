import { API_BASE_URL} from '../constants';

export function getSummary(){
    return (
        fetch(API_BASE_URL+"/summary")
    );
}

export function getCountrySummary(countryName){
    return (
        fetch(API_BASE_URL+`/total/country/${countryName}`)
    );
}

export function getDate(dateISO) {
    return new Date(Date.parse(dateISO)).toDateString();
}