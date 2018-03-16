import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarrosServiceProvider {

    constructor(public http: HttpClient) {
    }

}
