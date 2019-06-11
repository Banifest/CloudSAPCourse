using Action from './Action';
using Composition from './Composition';
using uuid from './Composition';

entity Artist {
    key guid : uuid;
    name : String(100);

    toAction : Association to many Action on toAction.guid = guid;
    toComposition : Association to many Composition on toComposition.guid = guid;
};