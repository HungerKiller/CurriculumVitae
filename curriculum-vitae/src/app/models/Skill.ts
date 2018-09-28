export class TechSkill {
    program: Array<string>;
    database: Array<string>;
    tools: Array<string>;
    library: Array<string>;
    other: Array<string>;

    constructor(private jsonObject: object) { 
        this.program = jsonObject['program'];
        this.database = jsonObject['database'];
        this.tools = jsonObject['tools'];
        this.library = jsonObject['library'];
        this.other = jsonObject['other'];
    }
}

export class LangSkill {
    name: string;
    grade: string;
    score: string;

    constructor(private jsonObject: object) { 
        this.name = jsonObject['name'];
        this.grade = jsonObject['grade'];
        this.score = jsonObject['score'];
    }
}