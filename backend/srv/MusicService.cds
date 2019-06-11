using Composition as _Composition from '../db/Composition';
using Action as _Action from '../db/Action';
using Genre as _Genre from '../db/Genre';
using Artist as _Artist from '../db/Artist';

service odata {

  entity Users @(
		title: 'Composition',
		Capabilities: {
			InsertRestrictions: {Insertable: false},
			UpdateRestrictions: {Updatable: false},
			DeleteRestrictions: {Deletable: false}
		}
	) as projection on _Composition;

  entity Action @(
		title: 'Action',
		Capabilities: {
			InsertRestrictions: {Insertable: false},
			UpdateRestrictions: {Updatable: false},
			DeleteRestrictions: {Deletable: false}
		}
	) as projection on _Action;

    entity Genre @(
		title: 'Genre',
		Capabilities: {
			InsertRestrictions: {Insertable: false},
			UpdateRestrictions: {Updatable: false},
			DeleteRestrictions: {Deletable: false}
		}
	) as projection on _Genre;

    entity Artist @(
		title: 'Artist',
		Capabilities: {
			InsertRestrictions: {Insertable: false},
			UpdateRestrictions: {Updatable: false},
			DeleteRestrictions: {Deletable: false}
		}
	) as projection on _Artist;
}
