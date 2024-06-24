/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Attendee as PrismaAttendee } from "@prisma/client";

export class AttendeeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AttendeeCountArgs, "select">): Promise<number> {
    return this.prisma.attendee.count(args);
  }

  async attendees(
    args: Prisma.AttendeeFindManyArgs
  ): Promise<PrismaAttendee[]> {
    return this.prisma.attendee.findMany(args);
  }
  async attendee(
    args: Prisma.AttendeeFindUniqueArgs
  ): Promise<PrismaAttendee | null> {
    return this.prisma.attendee.findUnique(args);
  }
  async createAttendee(
    args: Prisma.AttendeeCreateArgs
  ): Promise<PrismaAttendee> {
    return this.prisma.attendee.create(args);
  }
  async updateAttendee(
    args: Prisma.AttendeeUpdateArgs
  ): Promise<PrismaAttendee> {
    return this.prisma.attendee.update(args);
  }
  async deleteAttendee(
    args: Prisma.AttendeeDeleteArgs
  ): Promise<PrismaAttendee> {
    return this.prisma.attendee.delete(args);
  }
}
