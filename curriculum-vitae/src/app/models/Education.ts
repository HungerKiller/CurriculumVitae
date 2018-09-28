export class Education {
    period: string;
    school: string;
    specialty: string;
    level: string;
    city: string;
    courses: Array<string>;

    constructor(private jsonObject: object) { 
        this.period = jsonObject['period'];
        this.school = jsonObject['school'];
        this.specialty = jsonObject['specialty'];
        this.level = jsonObject['level'];
        this.city = jsonObject['city'];
        this.courses = jsonObject['courses'];
    }
}