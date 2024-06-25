export default function app_title(page?: string | '') {
    const pageTitle = page ? `| ${page}` : ''
    return `Inventum Health ${pageTitle}` 
}