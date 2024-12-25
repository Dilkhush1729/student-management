export interface Student {
    email: string;
    description: string;
    image?: String |File| null; // Optional, as the image may not be uploaded
    name: String;
}
