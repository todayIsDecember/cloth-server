export interface Root {
	success: boolean;
	data: Addreses[];
	errors: any[];
	warnings: any[];
	info: Info;
	messageCodes: any[];
	errorCodes: any[];
	warningCodes: any[];
	infoCodes: any[];
}

export interface Addreses {
	Ref: string;
	SettlementType: string;
	Latitude: string;
	Longitude: string;
	Description: string;
	DescriptionRu: string;
	DescriptionTranslit: string;
	SettlementTypeDescription: string;
	SettlementTypeDescriptionRu: string;
	SettlementTypeDescriptionTranslit: string;
	Region: string;
	RegionsDescription: string;
	RegionsDescriptionRu: string;
	RegionsDescriptionTranslit: string;
	Area: string;
	AreaDescription: string;
	AreaDescriptionRu: string;
	AreaDescriptionTranslit: string;
	Index1: string;
	Index2: string;
	IndexCOATSU1: string;
	Delivery1: string;
	Delivery2: string;
	Delivery3: string;
	Delivery4: string;
	Delivery5: string;
	Delivery6: string;
	Delivery7: string;
	SpecialCashCheck: number;
	RadiusHomeDelivery: string;
	RadiusExpressPickUp: string;
	RadiusDrop: string;
	Warehouse: string;
}

export interface Info {
	totalCount: number;
}
