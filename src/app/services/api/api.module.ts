import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';

import { AnythingService } from './api/anything.service';
import { AuthService } from './api/auth.service';
import { CookiesService } from './api/cookies.service';
import { DynamicDataService } from './api/dynamic-data.service';
import { HTTPMethodsService } from './api/http-methods.service';
import { ImagesService } from './api/images.service';
import { RedirectsService } from './api/redirects.service';
import { RequestInspectionService } from './api/request-inspection.service';
import { ResponseFormatsService } from './api/response-formats.service';
import { ResponseInspectionService } from './api/response-inspection.service';
import { StatusCodesService } from './api/status-codes.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule> {
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
