export class SelfEvaluation {
    evaluation: string;
    objective: string;

    constructor(private jsonObject: object) { 
        this.evaluation = jsonObject['evaluation'];
        this.objective = jsonObject['objective'];
    }
}