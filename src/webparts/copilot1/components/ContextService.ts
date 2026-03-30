import {
  HttpClient,
  SPHttpClient,
  MSGraphClientFactory,
} from "@microsoft/sp-http";
export default class ContextService {

  private static httpClient: HttpClient;
  private static spClient: SPHttpClient;
  private static url: string;
  private static graphClient: MSGraphClientFactory;
  private static currentUser: any;
  private static currentUserId: number;
  private static currentLanguage: number;
  private static farmLabel: string;
  private static currentCultureName: string;
  private static permissions: any;
  private static context: any;
  private static currentUserGUID : any;
  private static currentUserName: string;
  private static currentUserEmail: string;
  private static settingRowId: string | number = 1;
  private static microsoftTeams: any;

  public static Init(
    spClient: SPHttpClient,
    httpClient: HttpClient,
    graphClient: MSGraphClientFactory,
    url: string,
    currentUser: any,
    currentUserId: number,
    currentLanguage: number,
    farmLabel: string,
    currentCultureName: string,
    permissions: any,
    context: any,
    currentUserGUID: string,
    currentUserName: string,
    currentUserEmail: string,
    microsoftTeams: any,
  ) {
    this.spClient = spClient;
    this.httpClient = httpClient;
    this.url = url;
    this.graphClient = graphClient;
    this.currentUser = currentUser;
    this.currentUserId = currentUserId;
    this.currentLanguage = currentLanguage;
    this.farmLabel = farmLabel;
    this.currentCultureName = currentCultureName;
    this.permissions = permissions;
    this.context = context;
    this.currentUserGUID = currentUserGUID;
    this.currentUserName = currentUserName;
    this.currentUserEmail = currentUserEmail;
    this.microsoftTeams = microsoftTeams;
  }

  public static ismicrosoftTeams(): any {
    return this.microsoftTeams;
  }
  public static GetGraphContext() {
    return this.graphClient;
  }
  public static GetFullContext() {
    return this.context;
  }

  // Getters and setters for Current User GUID
  public static SetCurrentUserGUID(guid: string) {
    this.currentUserGUID = guid
  }
  public static GetCurrentUserName(): string {
    return this.currentUserName;
  }
  public static GetCurrentUserEmail(): string {
    return this.currentUserEmail;
  }

  public static GetCurrentUserGUID() {
    return this.currentUserGUID;
  }
  public static GetHttpContext() {
    return this.httpClient;
  }

  public static GetSPContext() {
    return this.spClient;
  }
  public static GetUrl(): string {
    return this.url;
  }
  public static GetCurrentUser(): any {
    return this.currentUser;
  }
  public static GetCurrentLanguage(): number {
    return this.currentLanguage;
  }
  public static GetCurentUserId(): number {
    return this.currentUserId;
  }
  public static GetPermission(): any {
    return this.permissions;
  }
  public static GetGlocation(): string {
    return this.farmLabel.split('_')[0];
  }
  public static GetcurrentCultureName(): string {
    return this.currentCultureName;
  }
  public static setSettingRowId(id: string | number) {
    this.settingRowId = id;
  }
  public static getSettingRowId(): string | number {
    return this.settingRowId;
  }
  public static GetAdminUrl() {
    return (
      this.url
        .replace(".sharepoint.com", "-admin.sharepoint.com")
        .split(".com")[0] + ".com"
    );
  }
  public static async Get(url: string): Promise<any> {
    let response = await this.httpClient.get(url, HttpClient.configurations.v1);
    return await response.json();
  }
}
