import {
  formatFiles,
  installPackagesTask,
  Tree,
  updateJson,
} from '@nrwl/devkit';

export default async function (host: Tree) {
  await updateJson(host, 'workspace.json', (workspaceJson) => {
    workspaceJson.projects = sortObjectKeys(workspaceJson.projects);
    return workspaceJson;
  });
  await formatFiles(host);
  return () => {
    installPackagesTask(host);
  };
}

function sortObjectKeys(obj: any) {
  const sorted = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      sorted[key] = obj[key];
    });
  return sorted;
}
