export default class getService {
    constructor() {
        this._apiBase = '/db.json';
    }

    async getResource() {
        const res = await fetch(this._apiBase);
        
        if(!res.ok) {
            throw new Error(`Could not fetch ` + 
            `, received ${res.status}`);            
        }
        return await res.json();
    }

}