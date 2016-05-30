import {Component, OnInit} from "@angular/core";
import {UekPlanService} from "./uek-plan.service";
import {Label} from "./label";


@Component({
    selector: 'uek-plan',
    template: ' <ul><li *ngFor="let label of labels">{{label.key}}</li></ul>',
    providers: [UekPlanService]
})
export class AppComponent implements OnInit {
    public labels:Label[] = [];

    constructor(private uekPlanService:UekPlanService) {

    }

    getLables() {
        this.uekPlanService
            .getLabels()
            .then((labels)=> {
                this.labels = labels;
                console.log(labels)
            })
            .catch((err)=> {
                console.log(err);
            });
    }

    ngOnInit() {
        this.getLables();
    }

}
