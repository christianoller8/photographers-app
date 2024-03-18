export interface Data {
    count:     number;
    next:      string;
    previous:  null;
    results:   Photographer[];
    timestamp: string;
}

export interface Photographer {
    id:          number;
    guid:        string;
    email:       string;
    first_name:  string;
    last_name:   string;
    is_removed:  boolean;
    description: string;
    avatar:      null;
    image:       string;
    facebook:    null | string;
    instagram:   null | string;
    webpage:     null | string;
}