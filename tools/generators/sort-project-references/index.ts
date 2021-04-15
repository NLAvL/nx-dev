import {
  formatFiles,
  installPackagesTask,
  Tree,
  updateJson,
} from '@nrwl/devkit';

export default async function (host: Tree) {
  await updateJson(host, 'workspace.json', (workspaceJson) => {
    workspaceJson.defaultProject = 'api';
    return workspaceJson;
  });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}
