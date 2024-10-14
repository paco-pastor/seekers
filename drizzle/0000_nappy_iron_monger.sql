CREATE TABLE `account` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`email` varchar(256),
	`password` varchar(256),
	CONSTRAINT `account_id` PRIMARY KEY(`id`)
);
