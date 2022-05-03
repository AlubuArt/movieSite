declare namespace Models {
    export interface NavItem {
        text: string;
        path: string;
    }

    export interface MovieItem {
        id: string;
        title: string;
        description: string;
        plprogram$year: number;
        cover: string;
        backdrop: string;
        genre: string;
        plprogram$tags: [{
            plprogram$title: string;
        }];
            
        plprogram$credits: [

        ]
        tdc$youtubeTrailer: string;
        plprogram$thumbnails: {
            [string]: { plprogram$url: string };
        };
        plprogram$descriptionLocalized: {
            en: string;
        };
        plprogramavailability$media: []

    }


    export interface GenreItem {
        genre: string | string[];
        items: [];
    }
}
