CREATE TABLE IF NOT EXISTS actuator (
	id bigserial NOT NULL,
    name text,
    description text,
    encodingtype text,
    metadata jsonb,   
    properties jsonb,   
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS taskingcapability (
	id bigserial NOT NULL,
    taskingParameters jsonb, 
    name text,
    description text,   
    thing text NOT NULL,
    actuator_id bigint NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS task (
	id bigserial NOT NULL,
    taskingParameters jsonb, 
    creationTime timestamptz,
    taskingcapability_id bigint NOT NULL,
    PRIMARY KEY (id)
);

alter table taskingcapability add constraint actuator_id foreign key (actuator_id) references actuator;
alter table task add constraint taskingcapability_id foreign key (taskingcapability_id ) references taskingcapability;

