import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import { AppModuleNgFactory } from './shared/app.module.ngfactory';
enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
