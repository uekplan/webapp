import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {Label} from "./label";
import {Type} from "./type";
import {Activity} from "./activity";
import {Note} from "./note";
import {Building} from "./building";
import {Tutor} from "./tutor";
import {Group} from "./group";
import {Field} from "./field";
import {Room} from "./room";

@Injectable()
export class UekPlanService {

    private url:string = 'https://api.uekplan.pl/';

    constructor(private http:Http) {
    }

    /**
     * Returns all avaible labels
     * @returns {Promise<void>|Promise<Label[]>}
     */
    getLabels():Promise<Label[]> {
        return this.http.get(this.url + 'labels')
            .toPromise()
            .then(response => response.json().labels)
            .catch(this.handleError);
    }

    /**
     * Returns label with given id
     * @param id
     * @returns {Promise<void>|Promise<Label>}
     */
    getLabelWithId(id:number):Promise<Label> {
        return this.http.get(this.url + 'labels/' + id)
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    /**
     * Returns all labels with key or value like query
     * @param key
     * @returns {Promise<void>|Promise<Label[]>}
     */
    searchForLabelsWith(query:string):Promise<Label> {
        return this.http.get(this.url + 'labels/' + query + '/find')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    /**
     * Returns all activities
     * @returns {Promise<void>|Promise<Activity[]>}
     */
    getActivities():Promise<Activity[]> {
        return this.http.get(this.url + 'activities')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    /**
     * Returns all notes
     * @returns {Promise<void>|Promise<Note[]>}
     */
    getNotes():Promise<Note[]> {
        return this.http.get(this.url + 'notes')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    /**
     * Returns all types
     * @returns {Promise<void>|Promise<Type[]>}
     */
    getTypes():Promise<Type[]> {
        return this.http.get(this.url + 'types')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }


    /**
     * Returns all tutors
     * @returns {Promise<void>|Promise<Tutor[]>}
     */
    getTutors():Promise<Tutor[]> {
        return this.http.get(this.url + 'tutors')
            .toPromise()
            .then(response => response.json().tutors)
            .catch(this.handleError);
    }


    /**
     * Returns all buildings
     * @returns {Promise<void>|Promise<Building[]>}
     */
    getBuildings():Promise<Building[]> {
        return this.http.get(this.url + 'buildings')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }


    /**
     * Returns all groups
     * @returns {Promise<void>|Promise<Group[]>}
     */
    getGroups():Promise<Group[]> {
        return this.http.get(this.url + 'groups')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    /**
     * Returns all fields
     * @returns {Promise<void>|Promise<Field[]>}
     */
    getFields():Promise<Field[]> {
        return this.http.get(this.url + 'fields')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    /**
     * Returns all rooms
     * @returns {Promise<void>|Promise<Room[]>}
     */
    getRooms():Promise<Room[]> {
        return this.http.get(this.url + 'rooms')
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    /**
     * @todo add query params: excludeLabels, excludeEvents, from, to, excludeActivity
     * @param labelsId
     * @returns {Promise<void>|Promise<Event[]>}
     */
    getEvents(labelsId:number[]):Promise<Event[]> {
        return this.http.get(this.url + 'events/' + labelsId.join(','))
            .toPromise()
            .then(resolve => resolve.json().data)
            .catch(this.handleError);
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}