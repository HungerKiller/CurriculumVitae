export class Project {
    name: string;
    organization: string;
    city: string;
    startDate: string;
    endDate: string;
    description: Description;
    duties: Array<string>;
    technologies: Array<Technology>;
    images: Array<Image>;
}

export class Description{
    header: string;
    details: Array<string>;
}

export class Technology{
    name: string;
    contents: Array<string>;
}

export class Image{
    source: string;
    alt: string;
    title: string;
}