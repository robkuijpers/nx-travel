import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, catchError, delay, throwError } from "rxjs";
import { Trip } from "../models/trip.model";

@Injectable({ providedIn: 'root' })
export class TravelService {

    #httpClient = inject(HttpClient);

    list(clientId: string | null): Observable<Trip[]> {
        return this.#httpClient.get<Trip[]>('/assets/trips.json').pipe(
            delay(2000),
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An client-side or network error occurred:', error.error);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(
                `Backend returned code ${error.status}, body was: `, error.error);
        }
        // Return an observable with a user-facing error message.
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }

}