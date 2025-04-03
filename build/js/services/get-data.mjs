import { ENTRY_POINT_DATA } from '../constant/ENTRY_JSON.mjs';
export async function getData() {
    try {
        const response = await fetch(ENTRY_POINT_DATA);
        if (!response.ok)
            return [];
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error + 'al momento de procesar la informacion...');
        return [];
    }
}
