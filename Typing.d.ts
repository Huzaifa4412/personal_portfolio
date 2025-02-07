interface SanityImage {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
    alt?: string;
    caption?: string;
}

export interface ProjectType {
    name: string;
    technologies: string[];
    description: string;
    project_image: SanityImage;
    project_link: string;
}
