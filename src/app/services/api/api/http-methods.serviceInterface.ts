/**
 * httpbin.org
 * A simple HTTP Request & Response Service.<br/> <br/> <b>Run locally: </b> <code>$ docker run -p 80:80 kennethreitz/httpbin</code>
 *
 * The version of the OpenAPI document: 0.9.2
 * Contact: me@kennethreitz.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';



import { Configuration }                                     from '../configuration';



export interface HTTPMethodsServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * The request\&#39;s DELETE parameters.
     * 
*/
    deleteDelete(extraHttpRequestParams?: any): Observable<{}>;

    /**
     * The request\&#39;s query parameters.
     * 
*/
    getGet(extraHttpRequestParams?: any): Observable<{}>;

    /**
     * The request\&#39;s PATCH parameters.
     * 
*/
    patchPatch(extraHttpRequestParams?: any): Observable<{}>;

    /**
     * The request\&#39;s POST parameters.
     * 
*/
    postPost(extraHttpRequestParams?: any): Observable<{}>;

    /**
     * The request\&#39;s PUT parameters.
     * 
*/
    putPut(extraHttpRequestParams?: any): Observable<{}>;

}
