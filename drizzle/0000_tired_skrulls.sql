CREATE TABLE `account` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`email` varchar(256) NOT NULL,
	`password` varchar(256) NOT NULL,
	CONSTRAINT `account_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `account_artifact` (
	`artifact_id` serial AUTO_INCREMENT NOT NULL,
	`account_id` serial AUTO_INCREMENT NOT NULL,
	`amount` serial AUTO_INCREMENT NOT NULL DEFAULT 1,
	CONSTRAINT `account_artifact_artifact_id` PRIMARY KEY(`artifact_id`)
);
--> statement-breakpoint
CREATE TABLE `artifact` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`rarity` varchar(256) NOT NULL,
	`delay` int NOT NULL DEFAULT 600,
	CONSTRAINT `artifact_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `account_artifact` ADD CONSTRAINT `account_artifact_artifact_id_artifact_id_fk` FOREIGN KEY (`artifact_id`) REFERENCES `artifact`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `account_artifact` ADD CONSTRAINT `account_artifact_account_id_account_id_fk` FOREIGN KEY (`account_id`) REFERENCES `account`(`id`) ON DELETE no action ON UPDATE no action;