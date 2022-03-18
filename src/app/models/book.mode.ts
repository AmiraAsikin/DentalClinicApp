import {Time} from "@angular/common";
import { DatetimeCustomEvent } from "@ionic/angular";

export interface Book{
    name: string;
    email: string;
    phone: string;
    treatment: string;
    date: Date;
    time: Time;
 }
 