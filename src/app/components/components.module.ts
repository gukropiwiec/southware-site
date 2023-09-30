import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeadlineComponent } from './headline/headline.component';
import { ButtonComponent } from './button/button.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { TranslateModule } from '@ngx-translate/core';

const moduleComponents = [
    HeaderComponent,
    HeadlineComponent,
    ButtonComponent,
    ClientsComponent,
    ServicesComponent,
    FeaturesComponent,
    TeamComponent
];

@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    declarations: moduleComponents,
    exports: moduleComponents,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
