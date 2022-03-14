INSERT INTO actuator (id, name, description, metadata, properties) 
VALUES(1, 'test', 'test', '{ "test": "test" }', '{ "test": "test" }');

INSERT INTO taskingcapability (id, taskingParameters, name, description, thing, actuator_id) 
VALUES(1, '{ "test": "test" }', 'test', 'test', 'https://geo.fvh.fi/features/collections/thing/items/157', 1);

INSERT INTO task (id, taskingParameters, creationTime, taskingcapability_id) 
VALUES(1, '{ "test": "test" }', to_timestamp( cast(extract(epoch from current_timestamp) as integer)), 1);

INSERT INTO task (id, taskingParameters, creationTime, taskingcapability_id) 
VALUES(2, '{ "test": "test2" }', to_timestamp( cast(extract(epoch from current_timestamp) as integer)), 1);