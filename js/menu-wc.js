'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">vendor-tizo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-6cff4d5b649b498943f441fc94a14c52051d5f142d503ee048eb2b6e31c4c8aa4eaf15eb0eb19b825fe17cb710d140dd1ff3d420e0bc4dab5daf907a87b644bd"' : 'data-target="#xs-components-links-module-AppModule-6cff4d5b649b498943f441fc94a14c52051d5f142d503ee048eb2b6e31c4c8aa4eaf15eb0eb19b825fe17cb710d140dd1ff3d420e0bc4dab5daf907a87b644bd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6cff4d5b649b498943f441fc94a14c52051d5f142d503ee048eb2b6e31c4c8aa4eaf15eb0eb19b825fe17cb710d140dd1ff3d420e0bc4dab5daf907a87b644bd"' :
                                            'id="xs-components-links-module-AppModule-6cff4d5b649b498943f441fc94a14c52051d5f142d503ee048eb2b6e31c4c8aa4eaf15eb0eb19b825fe17cb710d140dd1ff3d420e0bc4dab5daf907a87b644bd"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-6cff4d5b649b498943f441fc94a14c52051d5f142d503ee048eb2b6e31c4c8aa4eaf15eb0eb19b825fe17cb710d140dd1ff3d420e0bc4dab5daf907a87b644bd"' : 'data-target="#xs-injectables-links-module-AppModule-6cff4d5b649b498943f441fc94a14c52051d5f142d503ee048eb2b6e31c4c8aa4eaf15eb0eb19b825fe17cb710d140dd1ff3d420e0bc4dab5daf907a87b644bd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-6cff4d5b649b498943f441fc94a14c52051d5f142d503ee048eb2b6e31c4c8aa4eaf15eb0eb19b825fe17cb710d140dd1ff3d420e0bc4dab5daf907a87b644bd"' :
                                        'id="xs-injectables-links-module-AppModule-6cff4d5b649b498943f441fc94a14c52051d5f142d503ee048eb2b6e31c4c8aa4eaf15eb0eb19b825fe17cb710d140dd1ff3d420e0bc4dab5daf907a87b644bd"' }>
                                        <li class="link">
                                            <a href="injectables/TizoRestService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TizoRestService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-1a608c4cac7d460019216f08ec5556f5c4923993936aff9cf134f01801c9fc5b8989fdfc93dfe6f49cca487ed326d9359ba668df7aee0f10301040dbd26540c2"' : 'data-target="#xs-components-links-module-AuthModule-1a608c4cac7d460019216f08ec5556f5c4923993936aff9cf134f01801c9fc5b8989fdfc93dfe6f49cca487ed326d9359ba668df7aee0f10301040dbd26540c2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-1a608c4cac7d460019216f08ec5556f5c4923993936aff9cf134f01801c9fc5b8989fdfc93dfe6f49cca487ed326d9359ba668df7aee0f10301040dbd26540c2"' :
                                            'id="xs-components-links-module-AuthModule-1a608c4cac7d460019216f08ec5556f5c4923993936aff9cf134f01801c9fc5b8989fdfc93dfe6f49cca487ed326d9359ba668df7aee0f10301040dbd26540c2"' }>
                                            <li class="link">
                                                <a href="components/ForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecoveryPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecoveryPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SigninComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SigninComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-1a608c4cac7d460019216f08ec5556f5c4923993936aff9cf134f01801c9fc5b8989fdfc93dfe6f49cca487ed326d9359ba668df7aee0f10301040dbd26540c2"' : 'data-target="#xs-injectables-links-module-AuthModule-1a608c4cac7d460019216f08ec5556f5c4923993936aff9cf134f01801c9fc5b8989fdfc93dfe6f49cca487ed326d9359ba668df7aee0f10301040dbd26540c2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-1a608c4cac7d460019216f08ec5556f5c4923993936aff9cf134f01801c9fc5b8989fdfc93dfe6f49cca487ed326d9359ba668df7aee0f10301040dbd26540c2"' :
                                        'id="xs-injectables-links-module-AuthModule-1a608c4cac7d460019216f08ec5556f5c4923993936aff9cf134f01801c9fc5b8989fdfc93dfe6f49cca487ed326d9359ba668df7aee0f10301040dbd26540c2"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link" >ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-d2089ecedbc097d21023f240fccc0ea152cd5b52ae8180a02ba42769c052ad5d6bf5c50f79039e010bce9bdc9253353b3ddae62d82613496e55a1ca80b2bf48e"' : 'data-target="#xs-components-links-module-ComponentsModule-d2089ecedbc097d21023f240fccc0ea152cd5b52ae8180a02ba42769c052ad5d6bf5c50f79039e010bce9bdc9253353b3ddae62d82613496e55a1ca80b2bf48e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-d2089ecedbc097d21023f240fccc0ea152cd5b52ae8180a02ba42769c052ad5d6bf5c50f79039e010bce9bdc9253353b3ddae62d82613496e55a1ca80b2bf48e"' :
                                            'id="xs-components-links-module-ComponentsModule-d2089ecedbc097d21023f240fccc0ea152cd5b52ae8180a02ba42769c052ad5d6bf5c50f79039e010bce9bdc9253353b3ddae62d82613496e55a1ca80b2bf48e"' }>
                                            <li class="link">
                                                <a href="components/BreadcrumbComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BreadcrumbComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CompleteStepsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompleteStepsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreditcardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreditcardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerShipmentMapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerShipmentMapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DynamicFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageCropperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageCropperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InformationDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InformationDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapDirectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapDirectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuItemsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MenuItemsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuestionDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordForgivenComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordForgivenComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShipmentMapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShipmentMapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarSalesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarSalesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarSystemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarSystemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SuccessDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SuccessDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TizoDatepickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TizoDatepickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TizoModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TizoModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WarningDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WarningDialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CustomerModule.html" data-type="entity-link" >CustomerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CustomerModule-5cce641723ded1013b634583ff92193db365c538ff7cded1ff9dcfaff60c5698fab242953d3785b06edebe6a1786ed4af60e92d48638e0740c1fa3e7fbfba9cb"' : 'data-target="#xs-components-links-module-CustomerModule-5cce641723ded1013b634583ff92193db365c538ff7cded1ff9dcfaff60c5698fab242953d3785b06edebe6a1786ed4af60e92d48638e0740c1fa3e7fbfba9cb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CustomerModule-5cce641723ded1013b634583ff92193db365c538ff7cded1ff9dcfaff60c5698fab242953d3785b06edebe6a1786ed4af60e92d48638e0740c1fa3e7fbfba9cb"' :
                                            'id="xs-components-links-module-CustomerModule-5cce641723ded1013b634583ff92193db365c538ff7cded1ff9dcfaff60c5698fab242953d3785b06edebe6a1786ed4af60e92d48638e0740c1fa3e7fbfba9cb"' }>
                                            <li class="link">
                                                <a href="components/CustomerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-13982be996b355366c8cfce14f20c953b399c06813dff93cd272b3236d4bf5a7c6bff4303056d7997e82facbcc322b89278efc870ce9f30b9f97898d546aace2"' : 'data-target="#xs-components-links-module-DashboardModule-13982be996b355366c8cfce14f20c953b399c06813dff93cd272b3236d4bf5a7c6bff4303056d7997e82facbcc322b89278efc870ce9f30b9f97898d546aace2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-13982be996b355366c8cfce14f20c953b399c06813dff93cd272b3236d4bf5a7c6bff4303056d7997e82facbcc322b89278efc870ce9f30b9f97898d546aace2"' :
                                            'id="xs-components-links-module-DashboardModule-13982be996b355366c8cfce14f20c953b399c06813dff93cd272b3236d4bf5a7c6bff4303056d7997e82facbcc322b89278efc870ce9f30b9f97898d546aace2"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DirectivesModule.html" data-type="entity-link" >DirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-DirectivesModule-4f8cfe8e1434a8bf632d38c7b534688726935fbd7022d8f93bc3d43f1bea9cb12bfa8bbe9a8a8bdb6ad18403ec3d9527891851dec2249b26bff99377d03dcac5"' : 'data-target="#xs-directives-links-module-DirectivesModule-4f8cfe8e1434a8bf632d38c7b534688726935fbd7022d8f93bc3d43f1bea9cb12bfa8bbe9a8a8bdb6ad18403ec3d9527891851dec2249b26bff99377d03dcac5"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-4f8cfe8e1434a8bf632d38c7b534688726935fbd7022d8f93bc3d43f1bea9cb12bfa8bbe9a8a8bdb6ad18403ec3d9527891851dec2249b26bff99377d03dcac5"' :
                                        'id="xs-directives-links-module-DirectivesModule-4f8cfe8e1434a8bf632d38c7b534688726935fbd7022d8f93bc3d43f1bea9cb12bfa8bbe9a8a8bdb6ad18403ec3d9527891851dec2249b26bff99377d03dcac5"' }>
                                        <li class="link">
                                            <a href="directives/AppRoleDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppRoleDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ClickOutSideDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClickOutSideDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/ColumnCustomDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColumnCustomDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link" >NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotificationsModule-a8d6954ff571c394e44e32408fc8f8c73e4a9be00bde41e054f0e4d982255f067dc8621cfe71ed2eb3cab5bd5f9fb55d00add7a7d2b5dd1b229fb0bd1b80ad97"' : 'data-target="#xs-components-links-module-NotificationsModule-a8d6954ff571c394e44e32408fc8f8c73e4a9be00bde41e054f0e4d982255f067dc8621cfe71ed2eb3cab5bd5f9fb55d00add7a7d2b5dd1b229fb0bd1b80ad97"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotificationsModule-a8d6954ff571c394e44e32408fc8f8c73e4a9be00bde41e054f0e4d982255f067dc8621cfe71ed2eb3cab5bd5f9fb55d00add7a7d2b5dd1b229fb0bd1b80ad97"' :
                                            'id="xs-components-links-module-NotificationsModule-a8d6954ff571c394e44e32408fc8f8c73e4a9be00bde41e054f0e4d982255f067dc8621cfe71ed2eb3cab5bd5f9fb55d00add7a7d2b5dd1b229fb0bd1b80ad97"' }>
                                            <li class="link">
                                                <a href="components/NotificationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesModule.html" data-type="entity-link" >PagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagesModule-b38893a879cb65c771f2d71fe225d035bd34d02bd35de29245fe7402121124ac5f2305a682969afbf12d7fc2ab71311c215fdeee07161f4c2e391a2e9ca23678"' : 'data-target="#xs-components-links-module-PagesModule-b38893a879cb65c771f2d71fe225d035bd34d02bd35de29245fe7402121124ac5f2305a682969afbf12d7fc2ab71311c215fdeee07161f4c2e391a2e9ca23678"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagesModule-b38893a879cb65c771f2d71fe225d035bd34d02bd35de29245fe7402121124ac5f2305a682969afbf12d7fc2ab71311c215fdeee07161f4c2e391a2e9ca23678"' :
                                            'id="xs-components-links-module-PagesModule-b38893a879cb65c771f2d71fe225d035bd34d02bd35de29245fe7402121124ac5f2305a682969afbf12d7fc2ab71311c215fdeee07161f4c2e391a2e9ca23678"' }>
                                            <li class="link">
                                                <a href="components/PagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagesRoutingModule.html" data-type="entity-link" >PagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PipeSalesModule.html" data-type="entity-link" >PipeSalesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipeSalesModule-e4dc6820068d77a89ef130b5ed76bd1f609e61de1492c7a83a95e79aa5bddc0c9b921f4d2918d9593282727e1b0af688495e076a204112a85172b70ee34d3c2f"' : 'data-target="#xs-pipes-links-module-PipeSalesModule-e4dc6820068d77a89ef130b5ed76bd1f609e61de1492c7a83a95e79aa5bddc0c9b921f4d2918d9593282727e1b0af688495e076a204112a85172b70ee34d3c2f"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipeSalesModule-e4dc6820068d77a89ef130b5ed76bd1f609e61de1492c7a83a95e79aa5bddc0c9b921f4d2918d9593282727e1b0af688495e076a204112a85172b70ee34d3c2f"' :
                                            'id="xs-pipes-links-module-PipeSalesModule-e4dc6820068d77a89ef130b5ed76bd1f609e61de1492c7a83a95e79aa5bddc0c9b921f4d2918d9593282727e1b0af688495e076a204112a85172b70ee34d3c2f"' }>
                                            <li class="link">
                                                <a href="pipes/ListVariantPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListVariantPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link" >PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-59530627febc57ad1697734c25cd10e8b1dac697ceb4e2cdb2aed78a45b4aee7a12107094a6b97b0c8bcbda253c47de3e284a93ce98d7649949dd66ede5641a5"' : 'data-target="#xs-pipes-links-module-PipesModule-59530627febc57ad1697734c25cd10e8b1dac697ceb4e2cdb2aed78a45b4aee7a12107094a6b97b0c8bcbda253c47de3e284a93ce98d7649949dd66ede5641a5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-59530627febc57ad1697734c25cd10e8b1dac697ceb4e2cdb2aed78a45b4aee7a12107094a6b97b0c8bcbda253c47de3e284a93ce98d7649949dd66ede5641a5"' :
                                            'id="xs-pipes-links-module-PipesModule-59530627febc57ad1697734c25cd10e8b1dac697ceb4e2cdb2aed78a45b4aee7a12107094a6b97b0c8bcbda253c47de3e284a93ce98d7649949dd66ede5641a5"' }>
                                            <li class="link">
                                                <a href="pipes/AmPmPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AmPmPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ApproxDatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApproxDatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/BoolPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BoolPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NumberAlphabetPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NumberAlphabetPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TrackCodePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrackCodePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SalesModule.html" data-type="entity-link" >SalesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SalesModule-ad12fb6db01a4da403ffce6a27e678e6c8682defc52b21213b8dc97e49aff19d460a33852ad260549930786ccdd88f337bd6dcffb50e22f03e11b222c4401f54"' : 'data-target="#xs-components-links-module-SalesModule-ad12fb6db01a4da403ffce6a27e678e6c8682defc52b21213b8dc97e49aff19d460a33852ad260549930786ccdd88f337bd6dcffb50e22f03e11b222c4401f54"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SalesModule-ad12fb6db01a4da403ffce6a27e678e6c8682defc52b21213b8dc97e49aff19d460a33852ad260549930786ccdd88f337bd6dcffb50e22f03e11b222c4401f54"' :
                                            'id="xs-components-links-module-SalesModule-ad12fb6db01a4da403ffce6a27e678e6c8682defc52b21213b8dc97e49aff19d460a33852ad260549930786ccdd88f337bd6dcffb50e22f03e11b222c4401f54"' }>
                                            <li class="link">
                                                <a href="components/CouponsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CouponsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PromotionsContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromotionsContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShipmentsProductsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShipmentsProductsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TizoFilesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TizoFilesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TizoImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TizoImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TizoVideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TizoVideoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SalesRoutingModule.html" data-type="entity-link" >SalesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SchemesModule.html" data-type="entity-link" >SchemesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SchemesModule-58be0ca13ddf2d473a32297817fff0767a51f23bf768538e74508c8e39e5cabb171258b45d9635d0a32756bb1f0c4f9d89ccddc4357244886cd3b71dba8c8a80"' : 'data-target="#xs-components-links-module-SchemesModule-58be0ca13ddf2d473a32297817fff0767a51f23bf768538e74508c8e39e5cabb171258b45d9635d0a32756bb1f0c4f9d89ccddc4357244886cd3b71dba8c8a80"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SchemesModule-58be0ca13ddf2d473a32297817fff0767a51f23bf768538e74508c8e39e5cabb171258b45d9635d0a32756bb1f0c4f9d89ccddc4357244886cd3b71dba8c8a80"' :
                                            'id="xs-components-links-module-SchemesModule-58be0ca13ddf2d473a32297817fff0767a51f23bf768538e74508c8e39e5cabb171258b45d9635d0a32756bb1f0c4f9d89ccddc4357244886cd3b71dba8c8a80"' }>
                                            <li class="link">
                                                <a href="components/TableDynamicTemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableDynamicTemplateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ServicesModule.html" data-type="entity-link" >ServicesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TizoTableModule.html" data-type="entity-link" >TizoTableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' : 'data-target="#xs-components-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' :
                                            'id="xs-components-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' }>
                                            <li class="link">
                                                <a href="components/DynamicTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DynamicTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TizoPaginationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TizoPaginationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' : 'data-target="#xs-directives-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' :
                                        'id="xs-directives-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' }>
                                        <li class="link">
                                            <a href="directives/TizoTemplateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TizoTemplateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' : 'data-target="#xs-pipes-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' :
                                            'id="xs-pipes-links-module-TizoTableModule-5786aa6ec07ba77f10b88b13df30a51e30c663c842e85c9bbc176dd6374310905ef3d49d626e6a58c6cb5de1af5d42eedbe57e344a1414d8c3b6af0e350c2e40"' }>
                                            <li class="link">
                                                <a href="pipes/KeysHeaderPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeysHeaderPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PaginationPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaginationPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VendorModule.html" data-type="entity-link" >VendorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VendorModule-435506f9d4199f9f2ce2cbeb1a6b1b19706e46cc99c029768c6976126ea97178fdb230c6c0710fee7548c3ba168b1d70bbf98e9a717fbe0246f6af55b8fb5d82"' : 'data-target="#xs-components-links-module-VendorModule-435506f9d4199f9f2ce2cbeb1a6b1b19706e46cc99c029768c6976126ea97178fdb230c6c0710fee7548c3ba168b1d70bbf98e9a717fbe0246f6af55b8fb5d82"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VendorModule-435506f9d4199f9f2ce2cbeb1a6b1b19706e46cc99c029768c6976126ea97178fdb230c6c0710fee7548c3ba168b1d70bbf98e9a717fbe0246f6af55b8fb5d82"' :
                                            'id="xs-components-links-module-VendorModule-435506f9d4199f9f2ce2cbeb1a6b1b19706e46cc99c029768c6976126ea97178fdb230c6c0710fee7548c3ba168b1d70bbf98e9a717fbe0246f6af55b8fb5d82"' }>
                                            <li class="link">
                                                <a href="components/AccessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountsPayableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsPayableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountsReceivableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AccountsReceivableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApiIntegrationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiIntegrationsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ApiTizoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiTizoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BranchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BranchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BranchesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BranchesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CancellationOfAccountsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CancellationOfAccountsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FinanceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FinanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoicesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvoicesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InvoicesHistoricalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InvoicesHistoricalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManagementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManagementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductReturnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductReturnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfilesManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfilesManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PromotionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromotionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RecordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatementPayableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatementPayableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StatementsPayableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StatementsPayableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StoreComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StoreComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VendorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VendorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WalletComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WalletComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/RatingsComponent.html" data-type="entity-link" >RatingsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StepsComponent.html" data-type="entity-link" >StepsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AccountsPayableEntity.html" data-type="entity-link" >AccountsPayableEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AccountsReceivableEntity.html" data-type="entity-link" >AccountsReceivableEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/AreaEntity.html" data-type="entity-link" >AreaEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/BankEntity.html" data-type="entity-link" >BankEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/BranchEntity.html" data-type="entity-link" >BranchEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CapacityEntity.html" data-type="entity-link" >CapacityEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CatchError.html" data-type="entity-link" >CatchError</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordEntity.html" data-type="entity-link" >ChangePasswordEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CountryEntity.html" data-type="entity-link" >CountryEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CurrencyEntity.html" data-type="entity-link" >CurrencyEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomerEntity.html" data-type="entity-link" >CustomerEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/DeliveryManProfileEntity.html" data-type="entity-link" >DeliveryManProfileEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentEntity.html" data-type="entity-link" >DocumentEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocumentListEntity.html" data-type="entity-link" >DocumentListEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormSegment.html" data-type="entity-link" >FormSegment</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormSelectable.html" data-type="entity-link" >FormSelectable</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormTemplate.html" data-type="entity-link" >FormTemplate</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvoiceEntity.html" data-type="entity-link" >InvoiceEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/InvoiceHistoricalEntity.html" data-type="entity-link" >InvoiceHistoricalEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/MeasurementEntity.html" data-type="entity-link" >MeasurementEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentEntity.html" data-type="entity-link" >PaymentEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductEntity.html" data-type="entity-link" >ProductEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfileManagerEntity.html" data-type="entity-link" >ProfileManagerEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/RateListEntity.html" data-type="entity-link" >RateListEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/RateListItemEntity.html" data-type="entity-link" >RateListItemEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseRequest.html" data-type="entity-link" >ResponseRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResponseRequestHeaderStatus.html" data-type="entity-link" >ResponseRequestHeaderStatus</a>
                            </li>
                            <li class="link">
                                <a href="classes/RushHourEntity.html" data-type="entity-link" >RushHourEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatementReceivableEntity.html" data-type="entity-link" >StatementReceivableEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/StatementReceivableExtendEntity.html" data-type="entity-link" >StatementReceivableExtendEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreApiEntity.html" data-type="entity-link" >StoreApiEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreApiModel.html" data-type="entity-link" >StoreApiModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/StoreEntity.html" data-type="entity-link" >StoreEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableTemplate.html" data-type="entity-link" >TableTemplate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TableTemplate-1.html" data-type="entity-link" >TableTemplate</a>
                            </li>
                            <li class="link">
                                <a href="classes/TizoEditorComponent.html" data-type="entity-link" >TizoEditorComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/TizoListComponent.html" data-type="entity-link" >TizoListComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/TizoListComponent-1.html" data-type="entity-link" >TizoListComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/TizoMapEditorComponent.html" data-type="entity-link" >TizoMapEditorComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/TizoViewComponent.html" data-type="entity-link" >TizoViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/TizoViewComponent-1.html" data-type="entity-link" >TizoViewComponent</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransportTypeEntity.html" data-type="entity-link" >TransportTypeEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link" >UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserLogisticEntity.html" data-type="entity-link" >UserLogisticEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserVendorEntity.html" data-type="entity-link" >UserVendorEntity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AdminSystemService.html" data-type="entity-link" >AdminSystemService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ApiTestService.html" data-type="entity-link" >ApiTestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AreaRestService.html" data-type="entity-link" >AreaRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BankRestService.html" data-type="entity-link" >BankRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BranchRestService.html" data-type="entity-link" >BranchRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BranchService.html" data-type="entity-link" >BranchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CapacityRestService.html" data-type="entity-link" >CapacityRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountryRestService.html" data-type="entity-link" >CountryRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrencyRestService.html" data-type="entity-link" >CurrencyRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomerService.html" data-type="entity-link" >CustomerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomerStateService.html" data-type="entity-link" >CustomerStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DashboardRestService.html" data-type="entity-link" >DashboardRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DeliveryManProfileRestService.html" data-type="entity-link" >DeliveryManProfileRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DocumentRestService.html" data-type="entity-link" >DocumentRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorService.html" data-type="entity-link" >ErrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FinanceRestService.html" data-type="entity-link" >FinanceRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MapService.html" data-type="entity-link" >MapService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeasureRestService.html" data-type="entity-link" >MeasureRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationsService.html" data-type="entity-link" >NotificationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PackageService.html" data-type="entity-link" >PackageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PaymentMethodsService.html" data-type="entity-link" >PaymentMethodsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PositionCustomerService.html" data-type="entity-link" >PositionCustomerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfilevendorRestService.html" data-type="entity-link" >ProfilevendorRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RateListRestService.html" data-type="entity-link" >RateListRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SidebarStyleService.html" data-type="entity-link" >SidebarStyleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoreApiService.html" data-type="entity-link" >StoreApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoreRestService.html" data-type="entity-link" >StoreRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StoreService.html" data-type="entity-link" >StoreService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TizoRestService.html" data-type="entity-link" >TizoRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TizoStorageService.html" data-type="entity-link" >TizoStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TizoTableService.html" data-type="entity-link" >TizoTableService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransportTypeRestService.html" data-type="entity-link" >TransportTypeRestService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TypeProductService.html" data-type="entity-link" >TypeProductService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserRoleService.html" data-type="entity-link" >UserRoleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserStateService.html" data-type="entity-link" >UserStateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ValidatorsService.html" data-type="entity-link" >ValidatorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WaypointService.html" data-type="entity-link" >WaypointService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthInterceptor.html" data-type="entity-link" >AuthInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HttpErrorInterceptor.html" data-type="entity-link" >HttpErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/PagesGuard.html" data-type="entity-link" >PagesGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/VendorGuard.html" data-type="entity-link" >VendorGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AccountReceivableModel.html" data-type="entity-link" >AccountReceivableModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BreadcrumbInterface.html" data-type="entity-link" >BreadcrumbInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CapacityModel.html" data-type="entity-link" >CapacityModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CourierRouteModel.html" data-type="entity-link" >CourierRouteModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CustomerModel.html" data-type="entity-link" >CustomerModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeliveryMaProfileModel.html" data-type="entity-link" >DeliveryMaProfileModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DocumentModel.html" data-type="entity-link" >DocumentModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FormInterface.html" data-type="entity-link" >FormInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBranchModel.html" data-type="entity-link" >IBranchModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICardModel.html" data-type="entity-link" >ICardModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreditBagModel.html" data-type="entity-link" >ICreditBagModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDashboardStatsModel.html" data-type="entity-link" >IDashboardStatsModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IInventory.html" data-type="entity-link" >IInventory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IinvoiceDetailModel.html" data-type="entity-link" >IinvoiceDetailModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IinvoiceModel.html" data-type="entity-link" >IinvoiceModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INotificationModel.html" data-type="entity-link" >INotificationModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOption.html" data-type="entity-link" >IOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPaymentAvailableModel.html" data-type="entity-link" >IPaymentAvailableModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProductModel.html" data-type="entity-link" >IProductModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStoreModel.html" data-type="entity-link" >IStoreModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWholesalePrice.html" data-type="entity-link" >IWholesalePrice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PackageModel.html" data-type="entity-link" >PackageModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaymentModel.html" data-type="entity-link" >PaymentModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PermissionModel.html" data-type="entity-link" >PermissionModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PositionModel.html" data-type="entity-link" >PositionModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfileManagerModel.html" data-type="entity-link" >ProfileManagerModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RateListModel.html" data-type="entity-link" >RateListModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatementReceivableDetailModel.html" data-type="entity-link" >StatementReceivableDetailModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StatementReceivableModel.html" data-type="entity-link" >StatementReceivableModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TableInterface.html" data-type="entity-link" >TableInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TypeTransportModel.html" data-type="entity-link" >TypeTransportModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserModel.html" data-type="entity-link" >UserModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WaypointModel.html" data-type="entity-link" >WaypointModel</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});