import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from './components/buttons/icon-button/icon-button.component';
import { FabComponent } from './components/buttons/fab/fab.component';
import { ToggleButtonComponent } from './components/buttons/toggle-button/toggle-button.component';
import { InteractiveCardComponent } from './components/cards/interactive-card/interactive-card.component';
import { KpiCardComponent } from './components/cards/kpi-card/kpi-card.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './components/charts/line-chart/line-chart.component';
import { RealTimeDashboardComponent } from './components/charts/real-time-dashboard/real-time-dashboard.component';
import { ConditionalSectionComponent } from './components/forms/conditional-section/conditional-section.component';
import { DatePickerComponent } from './components/forms/date-picker/date-picker.component';
import { InlineEditableFormComponent } from './components/forms/inline-editable-form/inline-editable-form.component';
import { MultiSelectDropdownComponent } from './components/forms/multi-select-dropdown/multi-select-dropdown.component';
import { MultiStepFormComponent } from './components/forms/multi-step-form/multi-step-form.component';
import { PasswordFieldComponent } from './components/forms/password-field/password-field.component';
import { RichTextEditorComponent } from './components/forms/rich-text-editor/rich-text-editor.component';
import { TextFieldComponent } from './components/forms/text-field/text-field.component';
import { LoadingSpinnerComponent } from './components/indicators/loading-spinner/loading-spinner.component';
import { PresenceIndicatorComponent } from './components/indicators/presence-indicator/presence-indicator.component';
import { BottomSheetComponent } from './components/layouts/bottom-sheet/bottom-sheet.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { SidePanelComponent } from './components/layouts/side-panel/side-panel.component';
import { ImageGalleryComponent } from './components/multimedia/image-gallery/image-gallery.component';
import { MediaUploadComponent } from '../pages/shared/media/media-upload/media-upload.component';
import { VideoPlayerComponent } from './components/multimedia/video-player/video-player.component';
import { BreadcrumbsComponent } from './components/navigation/breadcrumbs/breadcrumbs.component';
import { SideNavComponent } from './components/navigation/side-nav/side-nav.component';
import { TopNavComponent } from './components/navigation/top-nav/top-nav.component';
import { BulkEditTableComponent } from './components/tables/bulk-edit-table/bulk-edit-table.component';
import { FilterableTableComponent } from './components/tables/filterable-table/filterable-table.component';
import { InfiniteScrollTableComponent } from './components/tables/infinite-scroll-table/infinite-scroll-table.component';
import { SortableTableComponent } from './components/tables/sortable-table/sortable-table.component';
import { DarkLightToggleComponent } from './components/themes/dark-light-toggle/dark-light-toggle.component';
import { DragDropWidgetComponent } from './components/widgets/drag-drop-widget/drag-drop-widget.component';
import { GanttChartComponent } from './components/widgets/gantt-chart/gantt-chart.component';
import { KanbanBoardComponent } from './components/widgets/kanban-board/kanban-board.component';
import { TableMultiLineContentComponent } from './components/table-multi-line-content/table-multi-line-content.component';
import { TransactionTableComponent } from './components/transaction-table/transaction-table.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeatureSectionComponent } from './components/feature-section/feature-section.component';
import { CtaSectionComponent } from './components/cta-section/cta-section.component';
import { BentoGridComponent } from './components/bento-grid/bento-grid.component';
import { PricingSectionComponent } from './components/pricing-section/pricing-section.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { StatsComponent } from './components/stats/stats.component';
import { StatsTimelineComponent } from './components/stats-timeline/stats-timeline.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { HierachicalChartComponent } from './components/charts/hierachical-chart/hierachical-chart.component';
import { MasonryComponent } from './components/masonry/masonry.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { MembersGroupComponent } from './components/members-group/members-group.component';
import { ContentComponent } from './components/content/content.component';
import { LogoCloudComponent } from './components/logo-cloud/logo-cloud.component';
import { FaqComponent } from './components/faq/faq.component';
import { FlyoutMenuComponent } from './components/flyout-menu/flyout-menu.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeedComponent } from './components/feed/feed.component'; 
import { MasonryGridComponent } from './components/masonry-grid/masonry-grid.component';
import { SpeedDialComponent } from './components/speed-dial/speed-dial.component';
import { PageHeadingComponent } from './components/page-heading/page-heading.component';
import { CardHeadingComponent } from './components/cards/card-heading/card-heading.component'; 
import { DataDisplayComponent } from './components/data-display/data-display.component'; 
import { SummaryTableComponent } from './components/tables/summary-table/summary-table.component';
import { CheckboxTableComponent } from './components/tables/checkbox-table/checkbox-table.component';
import { MultilineTableComponent } from './components/tables/multiline-table/multiline-table.component';
import { ResponsiveTableComponent } from './components/tables/responsive-table/responsive-table.component';
import { GridListActionsComponent } from './components/grid-list/grid-list-actions/grid-list-actions.component';
import { GridListContactComponent } from './components/grid-list/grid-list-contact/grid-list-contact.component';
import { SimpleAlertComponent } from './components/overlay/simple-alert/simple-alert.component';
import { SimpleAlertSingleComponent } from './components/overlay/simple-alert-single/simple-alert-single.component';
import { SimpleNotificationComponent } from './components/notification/simple-notification/simple-notification.component';
import { ActionNotificationComponent } from './components/notification/action-notification/action-notification.component';
import { AvatarNotificationComponent } from './components/notification/avatar-notification/avatar-notification.component';
import { OverlappingInputComponent } from './components/forms/input/overlapping-input/overlapping-input.component';
import { SharedInputComponent } from './components/forms/input/shared-input/shared-input.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './components/charts/scatter-chart/scatter-chart.component';
import { MultiChartComponent } from './components/charts/multi-chart/multi-chart.component';
import { OrganizationChartComponent } from './components/charts/organization-chart/organization-chart.component';
import { DynamicMasonryComponent } from './components/masonry/dynamic-masonry/dynamic-masonry.component';
import { StepperFormComponent } from './components/forms/stepper-form/stepper-form.component';
import { WysiwygComponent } from './components/wysiwyg/wysiwyg.component';
import { ItineraryComponent } from './components/itinerary/itinerary.component';

// import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    IconButtonComponent,
    FabComponent,
    ToggleButtonComponent,
    InteractiveCardComponent,
    KpiCardComponent,
    BarChartComponent,
    LineChartComponent,
    RealTimeDashboardComponent,
    ConditionalSectionComponent,
    DatePickerComponent,
    InlineEditableFormComponent,
    MultiSelectDropdownComponent,
    MultiStepFormComponent,
    PasswordFieldComponent,
    RichTextEditorComponent,
    TextFieldComponent,
    LoadingSpinnerComponent,
    PresenceIndicatorComponent,
    BottomSheetComponent,
    FooterComponent,
    SidePanelComponent,
    ImageGalleryComponent,
    VideoPlayerComponent,
    BreadcrumbsComponent,
    SideNavComponent,
    TopNavComponent,
    BulkEditTableComponent,
    FilterableTableComponent,
    InfiniteScrollTableComponent,
    SortableTableComponent,
    DarkLightToggleComponent,
    DragDropWidgetComponent,
    GanttChartComponent,
    KanbanBoardComponent,
    TableMultiLineContentComponent,
    TransactionTableComponent,
    HeroSectionComponent,
    FeatureSectionComponent,
    CtaSectionComponent,
    BentoGridComponent,
    PricingSectionComponent,
    NewsletterComponent,
    StatsComponent,
    StatsTimelineComponent,
    TestimonialsComponent,
    BlogSectionComponent,
    ContactUsComponent,
    CalendarComponent,
    HierachicalChartComponent,
    MasonryComponent,
    ContactSectionComponent,
    MembersGroupComponent,
    ContentComponent,
    LogoCloudComponent,
    FaqComponent,
    FlyoutMenuComponent,
    BannerComponent,
    FeedComponent,
    MasonryGridComponent,
    SpeedDialComponent,
    PageHeadingComponent,
    CardHeadingComponent,
    DataDisplayComponent,
    SummaryTableComponent,
    CheckboxTableComponent,
    MultilineTableComponent,
    ResponsiveTableComponent,
    GridListActionsComponent,
    GridListContactComponent,
    SimpleAlertComponent,
    SimpleAlertSingleComponent,
    SimpleNotificationComponent,
    ActionNotificationComponent,
    AvatarNotificationComponent,
    OverlappingInputComponent,
    SharedInputComponent,
    PieChartComponent,
    ScatterChartComponent,
    MultiChartComponent,
    OrganizationChartComponent,
    DynamicMasonryComponent,
    StepperFormComponent,
    WysiwygComponent,
    ItineraryComponent
  ],
  imports: [CommonModule, FormsModule ],
  exports: [
    IconButtonComponent,
    FabComponent,
    ToggleButtonComponent,
    InteractiveCardComponent,
    KpiCardComponent,
    BarChartComponent,
    LineChartComponent,
    RealTimeDashboardComponent,
    ConditionalSectionComponent,
    DatePickerComponent,
    InlineEditableFormComponent,
    MultiSelectDropdownComponent,
    MultiStepFormComponent,
    PasswordFieldComponent,
    RichTextEditorComponent,
    TextFieldComponent,
    LoadingSpinnerComponent,
    PresenceIndicatorComponent,
    BottomSheetComponent,
    FooterComponent,
    SidePanelComponent,
    ImageGalleryComponent,
    VideoPlayerComponent,
    BreadcrumbsComponent,
    SideNavComponent,
    TopNavComponent,
    BulkEditTableComponent,
    FilterableTableComponent,
    InfiniteScrollTableComponent,
    SortableTableComponent,
    DarkLightToggleComponent,
    DragDropWidgetComponent,
    GanttChartComponent,
    KanbanBoardComponent,
    TableMultiLineContentComponent,
    TransactionTableComponent,
    HeroSectionComponent,
    FeatureSectionComponent,
    CtaSectionComponent,
    BentoGridComponent,
    PricingSectionComponent,
    NewsletterComponent,
    StatsComponent,
    StatsTimelineComponent,
    TestimonialsComponent,
    BlogSectionComponent,
    ContactUsComponent,
    CalendarComponent,
    HierachicalChartComponent,
    MasonryComponent,
    BreadcrumbsComponent,
    ContactSectionComponent,
    MembersGroupComponent,
    ContentComponent,
    LogoCloudComponent,
    FaqComponent,
    FooterComponent,
    BannerComponent,
    FeedComponent, 
    MasonryGridComponent,
    DynamicMasonryComponent,
    SpeedDialComponent,
    PageHeadingComponent,
    CardHeadingComponent,
    DataDisplayComponent,
    SummaryTableComponent,
    CheckboxTableComponent,
    MultilineTableComponent,
    ResponsiveTableComponent,
    GridListActionsComponent,
    GridListContactComponent,
    SimpleAlertComponent,
    SimpleAlertSingleComponent,
    SimpleNotificationComponent,
    ActionNotificationComponent,
    AvatarNotificationComponent,
    BarChartComponent,
    PieChartComponent,
    ScatterChartComponent,
    MultiChartComponent,
    OrganizationChartComponent,
    StepperFormComponent,
    WysiwygComponent,
    ItineraryComponent
  ],
})
export class PartialModule {}
