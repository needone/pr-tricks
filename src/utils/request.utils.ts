import { Trick } from '../interfaces/trick.interface';

// Call external api to get custom json list
export const getListFromHttp = (url): Promise<Trick[]> => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = (): void => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
                // eslint-disable-next-line no-alert
                alert('L\'url ajouté ne correspond pas au format pris en compte (JSON)');
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.send();
});
