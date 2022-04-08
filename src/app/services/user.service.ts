import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface UsernameDTO {
    args: {username: string};
    data: string;
    files: Record<string, unknown>;
    form: Record<string, unknown>;
    headers: Record<string, unknown>;
    json: null;
    method: string;
    origin: string;
    url: string;
}

@Injectable({
    providedIn: "root",
})
export class UserService {

    // Login request was in user effects. I created a service since I consider it
    // gets cleaner having all the api call functions in a separate place.

    private baseUrl = "https://httpbin.org";
    constructor(private http: HttpClient) {}

    public sendRecovery(username: string): Observable<HttpResponse<UsernameDTO>> {

        // I did not get exactly how the provided endpoint worked, or if it was just an example ()
        // so I took one of the get examples in the mock.
        const url = this.baseUrl + "/anything?username=" + username;
        return this.http.get<UsernameDTO>(url, {observe: "response"});
    }
}
