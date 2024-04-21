/*
  Warnings:

  - A unique constraint covering the columns `[serial_number]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_serial_number_key" ON "User"("serial_number");
