/*
  Warnings:

  - Made the column `description` on table `Permission` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Permission" ALTER COLUMN "description" SET NOT NULL;