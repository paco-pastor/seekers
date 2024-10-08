CREATE TABLE account (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE artifact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    rarity VARCHAR(50) NOT NULL,
    website VARCHAR(255) NOT NULL,
    delay INT NOT NULL DEFAULT 300,
);

CREATE TABLE account_artifacts (
    account_id INT NOT NULL REFERENCES account,
    artifact_id INT NOT NULL REFERENCES artifact,
    quantity INT NOT NULL DEFAULT 1,
    PRIMARY KEY (account_id, artifact_id)
);