USE parties_db;

INSERT INTO client (client_name) VALUES ('Bilal');
INSERT INTO client (client_name) VALUES ('Brianne');
INSERT INTO client (client_name) VALUES ('Vincent');

INSERT INTO party (party_name, party_type, party_cost, client_id) VALUES ('Everybody Loves Raymond', 'tv', 500, 1);
INSERT INTO party (party_name, party_type, party_cost, client_id) VALUES ('Big Bang Theory', 'tv', 900, 1);
INSERT INTO party (party_name, party_type, party_cost, client_id) VALUES ('Top Gun', 'movie', 200, 2);
INSERT INTO party (party_name, party_type, party_cost, client_id) VALUES ('Whiskey', 'grown-up', 300, 2);
INSERT INTO party (party_name, party_type, party_cost, client_id) VALUES ('Cigar', 'grown-up', 250, 3);
