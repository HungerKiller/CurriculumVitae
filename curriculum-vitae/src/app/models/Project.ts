export class Project {
    name: string;
    organization: string;
    city: string;
    period: string;
    description: Description;
    duties: Array<string>;
    technologies: Array<Technology>;
}

export class Description{
    header: string;
    detail: Array<string>;
}

export class Technology{
    name: string;
    content: Array<string>;
}