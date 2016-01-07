import {Storage, SqlStorage} from 'ionic-framework/ionic';
import {Injectable} from 'angular2/core';

@Injectable()
    export class DataService {
        constructor() {
            this.storage = new Storage(SqlStorage, {name: 'marvel'});
            this.data = null;

            this.storage.get('marvel').then((marv) => {
                this.data = JSON.parse(marv);
            });
        }

        getData(){
            return this.storage.get('marvel');
        }

        save(question){
            if(!this.data){
                this.data = [question];
                let newData = JSON.stringify(question);
                this.storage.set('marvel', newData);
            } else {
                this.data.push(question);
                let newData = JSON.stringify(this.data);
                this.storage.set('marvel', newData);
            }
        }
    }

