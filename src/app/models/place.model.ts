export class Place {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    isVisited: boolean;

    constructor(id: number, name: string, description: string, imageUrl: string, isVisited: boolean = false) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.isVisited = isVisited;
    }
}
