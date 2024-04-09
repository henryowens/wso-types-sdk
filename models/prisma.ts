export type PrismaInput<R> = Omit<R, "id">;

type BaseRequest<D, P = {}> = {
  data: D;
  params: P;
};

export type RequestWithProjectId<D> = BaseRequest<D, { projectId: string }>;
