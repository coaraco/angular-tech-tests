export * from './anything.service';
import { AnythingService } from './anything.service';
export * from './anything.serviceInterface'
export * from './auth.service';
import { AuthService } from './auth.service';
export * from './auth.serviceInterface'
export * from './cookies.service';
import { CookiesService } from './cookies.service';
export * from './cookies.serviceInterface'
export * from './dynamic-data.service';
import { DynamicDataService } from './dynamic-data.service';
export * from './dynamic-data.serviceInterface'
export * from './http-methods.service';
import { HTTPMethodsService } from './http-methods.service';
export * from './http-methods.serviceInterface'
export * from './images.service';
import { ImagesService } from './images.service';
export * from './images.serviceInterface'
export * from './redirects.service';
import { RedirectsService } from './redirects.service';
export * from './redirects.serviceInterface'
export * from './request-inspection.service';
import { RequestInspectionService } from './request-inspection.service';
export * from './request-inspection.serviceInterface'
export * from './response-formats.service';
import { ResponseFormatsService } from './response-formats.service';
export * from './response-formats.serviceInterface'
export * from './response-inspection.service';
import { ResponseInspectionService } from './response-inspection.service';
export * from './response-inspection.serviceInterface'
export * from './status-codes.service';
import { StatusCodesService } from './status-codes.service';
export * from './status-codes.serviceInterface'
export const APIS = [AnythingService, AuthService, CookiesService, DynamicDataService, HTTPMethodsService, ImagesService, RedirectsService, RequestInspectionService, ResponseFormatsService, ResponseInspectionService, StatusCodesService];
