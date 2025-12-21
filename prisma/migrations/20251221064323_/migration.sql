/*
  Warnings:

  - You are about to drop the column `username` on the `roles` table. All the data in the column will be lost.
  - Made the column `name` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `detailDesc` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `shortDesc` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sold` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `factory` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `target` on table `products` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `name` to the `roles` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `users` table without a default value. This is not possible if the table is not empty.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `accountType` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `name` VARCHAR(255) NOT NULL,
    MODIFY `image` VARCHAR(255) NOT NULL,
    MODIFY `detailDesc` VARCHAR(255) NOT NULL,
    MODIFY `shortDesc` VARCHAR(255) NOT NULL,
    MODIFY `sold` VARCHAR(255) NOT NULL,
    MODIFY `factory` VARCHAR(255) NOT NULL,
    MODIFY `target` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `roles` DROP COLUMN `username`,
    ADD COLUMN `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `roleId` INTEGER NOT NULL,
    MODIFY `username` VARCHAR(255) NOT NULL,
    MODIFY `fullName` VARCHAR(255) NULL,
    MODIFY `accountType` VARCHAR(50) NOT NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
