export interface Repo {
    full_name: String;
    description?: String;

    html_url: String;

    language?: String;
    forks?: Number;
    open_issues?: Number;
}
