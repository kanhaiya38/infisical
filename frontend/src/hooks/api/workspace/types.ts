export type Workspace = {
  __v: number;
  _id: string;
  name: string;
  organization: string;
  environments: WorkspaceEnv[];
};

export type WorkspaceEnv = { name: string; slug: string };

// mutation dto
export type RenameWorkspaceDTO = { workspaceID: string; newWorkspaceName: string };

export type DeleteWorkspaceDTO = { workspaceID: string };

export type CreateEnvironmentDTO = {
  workspaceID: string;
  environmentSlug: string;
  environmentName: string;
};

export type UpdateEnvironmentDTO = {
  workspaceID: string;
  oldEnvironmentSlug: string;
  environmentSlug: string;
  environmentName: string;
};

export type DeleteEnvironmentDTO = { workspaceID: string; environmentSlug: string };
