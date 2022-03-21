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
        cover: string;
        backdrop: string;
        genre: string;
        actors: string[];
        directors: string[];
        previewPlayer: string;
        plprogram$thumbnails: {
            [string]: { plprogram$url: string };
        };
    }
}
