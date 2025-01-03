import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconButtonComponent } from './partial/components/buttons/icon-button/icon-button.component';
import { ToggleButtonComponent } from './partial/components/buttons/toggle-button/toggle-button.component';
import { FabComponent } from './partial/components/buttons/fab/fab.component';
import { TextFieldComponent } from './partial/components/forms/text-field/text-field.component';
import { PasswordFieldComponent } from './partial/components/forms/password-field/password-field.component';
import { DatePickerComponent } from './partial/components/forms/date-picker/date-picker.component';
import { MultiSelectDropdownComponent } from './partial/components/forms/multi-select-dropdown/multi-select-dropdown.component';
import { RichTextEditorComponent } from './partial/components/forms/rich-text-editor/rich-text-editor.component';
import { MultiStepFormComponent } from './partial/components/forms/multi-step-form/multi-step-form.component';
import { InlineEditableFormComponent } from './partial/components/forms/inline-editable-form/inline-editable-form.component';
import { ConditionalSectionComponent } from './partial/components/forms/conditional-section/conditional-section.component';
import { SortableTableComponent } from './partial/components/tables/sortable-table/sortable-table.component';
import { FilterableTableComponent } from './partial/components/tables/filterable-table/filterable-table.component';
import { InfiniteScrollTableComponent } from './partial/components/tables/infinite-scroll-table/infinite-scroll-table.component';
import { BulkEditTableComponent } from './partial/components/tables/bulk-edit-table/bulk-edit-table.component';
import { TopNavComponent } from './partial/components/navigation/top-nav/top-nav.component';
import { SideNavComponent } from './partial/components/navigation/side-nav/side-nav.component';
import { BreadcrumbsComponent } from './partial/components/navigation/breadcrumbs/breadcrumbs.component';
import { KpiCardComponent } from './partial/components/cards/kpi-card/kpi-card.component';
import { InteractiveCardComponent } from './partial/components/cards/interactive-card/interactive-card.component';
import { PresenceIndicatorComponent } from './partial/components/indicators/presence-indicator/presence-indicator.component';
import { LoadingSpinnerComponent } from './partial/components/indicators/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './partial/components/layouts/header/header.component';
import { FooterComponent } from './partial/components/layouts/footer/footer.component';
import { SidePanelComponent } from './partial/components/layouts/side-panel/side-panel.component';
import { BottomSheetComponent } from './partial/components/layouts/bottom-sheet/bottom-sheet.component';
import { DarkLightToggleComponent } from './partial/components/themes/dark-light-toggle/dark-light-toggle.component';
import { ImageGalleryComponent } from './partial/components/multimedia/image-gallery/image-gallery.component';
import { VideoPlayerComponent } from './partial/components/multimedia/video-player/video-player.component';
import { MediaUploadComponent } from './partial/components/multimedia/media-upload/media-upload.component';
import { DragDropWidgetComponent } from './partial/components/widgets/drag-drop-widget/drag-drop-widget.component';
import { GanttChartComponent } from './partial/components/widgets/gantt-chart/gantt-chart.component';
import { KanbanBoardComponent } from './partial/components/widgets/kanban-board/kanban-board.component';
import { BarChartComponent } from './partial/components/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './partial/components/charts/line-chart/line-chart.component';
import { RealTimeDashboardComponent } from './partial/components/charts/real-time-dashboard/real-time-dashboard.component';
import { HighlightDirective } from './partial/directives/highlight.directive';
import { TooltipDirective } from './partial/directives/tooltip.directive';
import { DateFormatPipe } from './partial/pipes/date-format.pipe';
import { CurrencyFormatPipe } from './partial/pipes/currency-format.pipe';
import { SearchFilterPipe } from './partial/pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IconButtonComponent,
    ToggleButtonComponent,
    FabComponent,
    TextFieldComponent,
    PasswordFieldComponent,
    DatePickerComponent,
    MultiSelectDropdownComponent,
    RichTextEditorComponent,
    MultiStepFormComponent,
    InlineEditableFormComponent,
    ConditionalSectionComponent,
    SortableTableComponent,
    FilterableTableComponent,
    InfiniteScrollTableComponent,
    BulkEditTableComponent,
    TopNavComponent,
    SideNavComponent,
    BreadcrumbsComponent,
    KpiCardComponent,
    InteractiveCardComponent,
    PresenceIndicatorComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    FooterComponent,
    SidePanelComponent,
    BottomSheetComponent,
    DarkLightToggleComponent,
    ImageGalleryComponent,
    VideoPlayerComponent,
    MediaUploadComponent,
    DragDropWidgetComponent,
    GanttChartComponent,
    KanbanBoardComponent,
    BarChartComponent,
    LineChartComponent,
    RealTimeDashboardComponent,
    HighlightDirective,
    TooltipDirective,
    DateFormatPipe,
    CurrencyFormatPipe,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
