import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map } from "rxjs/operators";


@Injectable()
export class GithubService{
    private username:string;
    private client_id = 'Iv1.4617e5cf787e0374';
    private client_secret = '55192287278d36f3c9a1329341ac6f317581275e';
    
    constructor(private _http: Http){
        console.log('Github Service Ready...');
         this.username = 'bradtraversy';
    }
    
    
    getUser(){
         return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
             .pipe(map(res => res.json()));
     }

     getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
             .pipe(map(res => res.json()));
    }

    updateUser(username:string){
        this.username = username;
    }


}