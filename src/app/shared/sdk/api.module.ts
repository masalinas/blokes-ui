import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { HelmApiControllerService } from './api/helmApiController.service';
import { K8sAppsV1ApiControllerService } from './api/k8sAppsV1ApiController.service';
import { K8sCoreV1ApiControllerService } from './api/k8sCoreV1ApiController.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    HelmApiControllerService,
    K8sAppsV1ApiControllerService,
    K8sCoreV1ApiControllerService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
