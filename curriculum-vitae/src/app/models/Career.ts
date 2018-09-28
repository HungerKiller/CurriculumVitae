export class Career {
    period: string;
    company: string;
    post: string;
    city: string;
    duty: Array<string>;
    technology: Array<string>;
    project: Array<string>;

    constructor(private jsonObject: object) { 
        this.period = jsonObject['period'];
        this.company = jsonObject['company'];
        this.post = jsonObject['post'];
        this.city = jsonObject['city'];
        this.duty = jsonObject['duty'];
        this.technology = jsonObject['technology'];
        this.project = jsonObject['project'];
    }
}