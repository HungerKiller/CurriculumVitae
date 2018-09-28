export class BasicInformation {
    name: string;
    sex: string;
    birthday: string;
    workExperience: string;
    tel: string;
    email: string;

    constructor(private jsonObject: object) { 
        this.name = jsonObject['name'];
        this.sex = jsonObject['sex'];
        this.birthday = jsonObject['birthday'];
        this.workExperience = jsonObject['workExperience'];
        this.tel = jsonObject['tel'];
        this.email = jsonObject['email'];
    }
}