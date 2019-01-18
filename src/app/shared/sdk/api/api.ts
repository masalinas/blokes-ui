export * from './helmApiController.service';
import { HelmApiControllerService } from './helmApiController.service';
export * from './k8sAppsV1ApiController.service';
import { K8sAppsV1ApiControllerService } from './k8sAppsV1ApiController.service';
export * from './k8sCoreV1ApiController.service';
import { K8sCoreV1ApiControllerService } from './k8sCoreV1ApiController.service';
export const APIS = [HelmApiControllerService, K8sAppsV1ApiControllerService, K8sCoreV1ApiControllerService];
