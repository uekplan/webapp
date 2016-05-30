import {Tutor} from "./tutor";
import {Group} from "./group";
import {Room} from "./room";
import {Activity} from "./activity";
import {Type} from "./type";
import {Note} from "./note";
export class Event {
    id:string;
    date:Date;
    day:number;
    from:string;
    to:string;
    blocks:number;
    deleted:boolean;
    tutor:Tutor;
    room:Room;
    group:Group;
    type:Type;
    note:Note;
    activity:Activity;
}