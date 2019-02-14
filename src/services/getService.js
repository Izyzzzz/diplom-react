export default class getService {
    constructor() {
        this._apiBase = '/db.json';
    }

    async getResource() {
        const res = await fetch(this._apiBase);
        
        if(!res.ok) {
            const error =  new Error(`Could not fetch ` + 
            `, received ${res.status}`);
            error.status = res.status;
            throw error;            
        }
        return await res.json();
    }

}