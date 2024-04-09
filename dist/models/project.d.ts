import type { Prisma, Project } from "wso-prisma-sdk";
import type { PrismaInput, RequestWithProjectId } from "./prisma";
export type PostProjectRequest = PrismaInput<(Prisma.Without<Prisma.ProjectCreateInput, Prisma.ProjectUncheckedCreateInput> & Prisma.ProjectUncheckedCreateInput) | (Prisma.Without<Prisma.ProjectUncheckedCreateInput, Prisma.ProjectCreateInput> & Prisma.ProjectCreateInput)>;
export type PostProjectResponse = Project;
export type PatchProjectRequest = RequestWithProjectId<Prisma.XOR<Prisma.ProjectUpdateInput, Prisma.ProjectUncheckedUpdateInput>>;
export type PatchProjectResponse = Project;
export type GetProjectResponse = Project;
export type GetManyProjectsResponse = Project[];
