using Artist from './Artist';
using Genre from './Genre';

type uuid : String(32);

entity Composition {
    key guid : uuid;
    name : String(100);

    toArtist : association to one Artist on toArtist.guid = guid;
    toGenre : Association to one Genre on toGenre.name = name;
};