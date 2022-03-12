declare namespace Models {
    export interface NavItem {
        text: string;
        path: string;
    }

    export interface MovieItem {
        guid: string;
        title: string;
        description: string;
        releaseYear: number;
        cover: any[];
        backdrop: string;
        genre: string;
        actors: string[];
        directors: string[];
        previewPlayer: string;
    }
}
