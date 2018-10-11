export interface jobInformation{
	title: string;
	uuid: string;
	parent_uuid: string;
}

export interface skillInformation{
	// name: string;
	// description: string;
	// score: number;
	// selected: boolean;
	skill_uuid: string;
	skill_name: string;
	skill_type: string;
	normalized_skill_name: string;
	level: number;
	importance: number;
	description: string;
}

export interface gigInformation{
	description: string;
	o_net_cat: string;
	skills: string[];
	title: string;
	url: string;
}

export interface relatedJobInformation{
	job_uuid: string;
	job_title: string;
	importance: number;
	level: number; 
	normalized_job_title: string;
	score: number;
}