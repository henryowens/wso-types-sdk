import type { Prisma, Project } from "wso-prisma-sdk";

import type { PrismaInput, RequestWithProjectId } from "./prisma";

// POST
export type PostProjectRequest = PrismaInput<
  | (Prisma.Without<
      Prisma.ProjectCreateInput,
      Prisma.ProjectUncheckedCreateInput
    > &
      Prisma.ProjectUncheckedCreateInput)
  | (Prisma.Without<
      Prisma.ProjectUncheckedCreateInput,
      Prisma.ProjectCreateInput
    > &
      Prisma.ProjectCreateInput)
>;

export type PostProjectResponse = Project;

// Patch
export type PatchProjectRequest = RequestWithProjectId<
  Prisma.XOR<Prisma.ProjectUpdateInput, Prisma.ProjectUncheckedUpdateInput>
>;

export type PatchProjectResponse = Project;

// GET
export type GetProjectResponse = Project;

// GET MANY
export type GetManyProjectsResponse = Project[];
