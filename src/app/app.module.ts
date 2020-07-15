import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { stubServiceProviders } from '@core/providers/stubService.provider';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { MovieCardComponent } from '@shared/components/movie-card/movie-card.component';
import { MovieSummaryLineComponent } from '@shared/components/movie-summary-line/movie-summary-line.component';
import { WeeklyScreeningsComponent } from '@shared/components/weekly-screenings/weekly-screenings.component';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './areas/external/views/schedule/schedule.component';

registerLocaleData(localeDe, localeDeExtra);

@NgModule({
	declarations: [
		AppComponent,
		ScheduleComponent,
		WeeklyScreeningsComponent,
		FooterComponent,
		MovieSummaryLineComponent,
		MovieCardComponent,
	],
	imports: [BrowserModule],
	providers: [...stubServiceProviders, { provide: LOCALE_ID, useValue: 'de' }],
	bootstrap: [AppComponent],
})
export class AppModule {}
